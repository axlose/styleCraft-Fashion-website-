export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-medium tracking-wide uppercase text-sm">우리의 이야기</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                패션을 통해 개성을 표현하는
                <br />
                새로운 방법을 제시합니다
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              StyleCraft는 2020년 설립된 이래로 고품질 소재와 세심한 디테일에 대한 집착으로 패션 업계에서 독특한 위치를
              차지하고 있습니다.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              우리는 단순히 옷을 만드는 것이 아니라, 착용하는 사람의 개성과 라이프스타일을 반영하는 작품을 창조합니다.
              지속 가능한 패션과 윤리적 생산을 통해 더 나은 미래를 만들어가고 있습니다.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50K+</div>
                <div className="text-muted-foreground text-sm">만족한 고객</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">200+</div>
                <div className="text-muted-foreground text-sm">디자인 제품</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fashion Designer at Work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
