import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container max-w-screen-lg space-y-24 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="hidden items-center justify-center md:flex">
          <Image
            src="https://github.com/wontory.png"
            alt="wontory"
            width="320"
            height="320"
            draggable={false}
            className="rounded-full border-2 shadow-primary/5 shadow-sm"
          />
        </div>
        <div className="prose dark:prose-invert space-y-4">
          <h2 className="font-semibold text-foreground">조성원 · wontory</h2>
          <span>
            <p>
              경기대학교에서 컴퓨터공학을 전공하고 있으며, (2019 ~ )
              <br />
              프론트엔드 개발을 중점적으로 공부하고 있습니다.
            </p>
            <p>
              UX Enthusiast로서,
              <br />
              사용자의 입장에서 한 번 더 생각하고, 경험을 개선합니다.
            </p>
          </span>
          <span>
            <p>
              보여지는 것을 넘어,
              <br />
              애니메이션과 인터랙션을 통해 사용자와 교감하며
              <br />
              보다 사람의 방식으로 가치를 전달하는 것에 큰 관심이 있습니다.
            </p>
            <p>
              다양한 레퍼런스를 찾고 분석/개발해보며, 좋은 UX를 고민하고
              있습니다.
            </p>
          </span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col space-y-8">
        <div className="flex justify-center gap-4">
          <Link
            href="https://github.com/wontory"
            className="underline underline-offset-4"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/wontory/"
            className="underline underline-offset-4"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:devwontory@gmail.com"
            className="underline underline-offset-4"
          >
            Gmail
          </Link>
          <Link
            href="mailto:tjddnjsjo@kakao.com"
            className="underline underline-offset-4"
          >
            KakaoMail
          </Link>
        </div>
        <p className="text-center text-primary/60 text-sm">
          Don't hesitate to contact me.
        </p>
      </div>
    </div>
  )
}
