import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { PostCoverImage } from "@/PostCoverImage";
import { Suspense } from "react"

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: '/post/teste',
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: '/images/bryen_9.png',
            alt: 'Alt da imagem',
            priority: true,
          }}
        />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600  block mb-4 text-sm/tight"
            dateTime="2025-06-27"
          >
            27/06/2025 16:00
          </time>

          <PostHeading as='h2' url='#'>
            Lorem Ipsum é um texto fictício.
          </PostHeading>

          <p>
            Lorem Ipsum é um texto fictício, também conhecido como texto de preenchimento ou espaço reservado.
            Lorem Ipsum é um texto fictício, também conhecido como texto de preenchimento ou espaço reservado.
            Lorem Ipsum é um texto fictício, também conhecido como texto de preenchimento ou espaço reservado.
            Lorem Ipsum é um texto fictício, também conhecido como texto de preenchimento ou espaço reservado.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a Footer</h1>
      </footer>
    </Container>
  );
}
