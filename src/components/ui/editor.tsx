/* eslint-disable react/react-in-jsx-scope */
'use client'

import { Icon } from '@iconify/react';
import {
    useEditor,
    BubbleMenu,
    EditorContent,
    FloatingMenu,
} from '@tiptap/react'
import Image from '@tiptap/extension-image'

import StarterKit from '@tiptap/starter-kit'
import React, { useEffect, useState } from 'react';
import SelectImage from '../custom/select-image';

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
}

const Editor = ({ value, onChange }: EditorProps) => {
    const [imgSelect, setImgSelect] = useState<string[]>([])
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const editor = useEditor({
        extensions: [StarterKit, Image],
        content: '',
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        immediatelyRender: false
    })

    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value);
        }
    }, [value, editor]);


    useEffect(() => {
        if (!isOpenModal && Boolean(imgSelect.length)) {
            if (editor)

                for (const url of imgSelect) {
                    editor.chain().focus().setImage({ src: url }).run();
                }
        }
    }, [isOpenModal, imgSelect, editor]);

    return (
        <>
            {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    <Icon icon="jam:bold" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    <Icon icon="jam:italic" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    <Icon icon="jam:strikethrough" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleCode()
                            .run()
                    }
                    className={editor.isActive('code') ? 'is-active' : ''}
                >
                    <Icon icon="ic:round-code" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                    <Icon icon="jam:header-1" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                    <Icon icon="jam:header-2" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                    <Icon icon="jam:header-3" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'is-active' : ''}
                >
                    <Icon icon="jam:paragraph" width={18} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    <Icon icon="f7:list-bullet" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                    <Icon icon="f7:list-number" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                    <Icon icon="ph:code" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'is-active' : ''}
                >
                    <Icon icon="bi:quote" width={24} height={24} />
                </button>
            </BubbleMenu>
            }

            {editor && <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                    <Icon icon="jam:header-1" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                    <Icon icon="jam:header-2" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                    <Icon icon="jam:header-3" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'is-active' : ''}
                >
                    <Icon icon="jam:paragraph" width={18} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    <Icon icon="f7:list-bullet" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                    <Icon icon="f7:list-number" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                    <Icon icon="ph:code" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'is-active' : ''}
                >
                    <Icon icon="bi:quote" width={24} height={24} />
                </button>
                <button
                    type='button'
                    onClick={() => setIsOpenModal(true)}
                >
                    <Icon icon="material-symbols:image-outline" width={24} height={24} />
                </button>
            </FloatingMenu>
            }

            <SelectImage key={'editor'} value={undefined} isOpen={isOpenModal} closeModal={() => setIsOpenModal(false)} onChange={setImgSelect} />

            <EditorContent editor={editor} />
        </>

    )
}

export default React.memo(Editor)
