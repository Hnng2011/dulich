import Container from "@/components/ui/container";

export default function Page({ params }: { params: { tourid: string } }) {
    return (
        <Container>
            My Post: {params.tourid}
        </Container>
    )
}