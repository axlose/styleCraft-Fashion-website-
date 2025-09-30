import { Leaf, Heart, Award, Users } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "지속가능성",
    description: "환경을 생각하는 친환경 소재와 생산 과정을 통해 지구를 보호합니다.",
  },
  {
    icon: Heart,
    title: "품질에 대한 열정",
    description: "최고급 소재와 정교한 기술로 오래도록 사랑받는 제품을 만듭니다.",
  },
  {
    icon: Award,
    title: "혁신적 디자인",
    description: "트렌드를 선도하는 독창적인 디자인으로 새로운 패션을 제시합니다.",
  },
  {
    icon: Users,
    title: "고객 중심",
    description: "고객의 만족과 행복이 우리가 추구하는 가장 중요한 가치입니다.",
  },
]

export function CompanyValues() {
  return (
    <section id="values" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-2">우리의 가치</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            StyleCraft가 추구하는 핵심 가치
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            우리의 모든 결정과 행동은 이 네 가지 핵심 가치를 바탕으로 합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
