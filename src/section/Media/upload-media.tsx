/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState, ChangeEvent, useMemo, useRef, useCallback } from "react"
import { createClient } from '@supabase/supabase-js'
import { usePathname } from "next/navigation"
import { Icon } from '@iconify/react';

const imageSchema = z.object({
    images: z.array(z.object({ name: z.string(), image_link: z.string() })).min(1, "Bạn phải chọn ít nhất một ảnh."),
});

interface UploadMediaProps {
    refreshData: () => void;
}

export function UploadMedia({ refreshData }: UploadMediaProps) {
    const pathname = usePathname();
    const [localImages, setLocalImages] = useState<File[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const supabaseUrl = useMemo(() => process.env.NEXT_PUBLIC_SUPABASE_URL as string, []);
    const supabaseKey = useMemo(() => process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string, []);
    const supabase = useMemo(() => createClient(supabaseUrl, supabaseKey), [supabaseUrl, supabaseKey]);

    const form = useForm<z.infer<typeof imageSchema>>({
        resolver: zodResolver(imageSchema),
        defaultValues: {
            images: [],
        },
    });

    const handleImageChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const files: File[] = Array.from(e.target.files || []);
        setLocalImages(files);
    }, []);

    const uploadImage = useCallback(async () => {
        setLoading(true);
        const imgUrls: { name: string, image_link: string }[] = [];

        for (const file of localImages) {
            const { error } = await supabase.storage.from('Tour').upload(file.name, file, {
                cacheControl: '3600',
                upsert: true
            });

            if (error) {
                console.error('Error uploading file:', error);
                continue;
            }

            const { publicUrl } = supabase.storage.from('Tour').getPublicUrl(file.name).data;
            if (publicUrl) {
                imgUrls.push({ name: file.name, image_link: publicUrl });
            } else {
                console.error('Error getting public URL for file:', file.name);
            }
        }

        if (imgUrls.length > 0) {
            form.setValue("images", imgUrls);
            setLocalImages([]);
            form.handleSubmit(onSubmit)();
        }

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }, [localImages, supabase, form]);

    const onSubmit = useCallback(async (data: z.infer<typeof imageSchema>) => {
        try {
            await fetch(`${pathname}/api`, {
                method: "POST",
                body: JSON.stringify({ type: "upload", images: data.images }),
            });

            form.reset();
            refreshData();
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }, [form]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="images"
                    render={() => (
                        <FormItem className="flex items-center gap-2">
                            <FormControl className="max-w-sm">
                                <Input
                                    ref={fileInputRef}
                                    accept="image/png, image/gif, image/jpeg"
                                    type="file"
                                    multiple
                                    onChange={handleImageChange}
                                />
                            </FormControl>
                            <Button
                                disabled={localImages.length < 1 || loading}
                                type="button"
                                onClick={uploadImage}
                                className="!m-0"
                            >
                                {loading ? (
                                    <Icon icon="line-md:loading-loop" width={25} height={25} />
                                ) : (
                                    'Upload'
                                )}
                            </Button>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
