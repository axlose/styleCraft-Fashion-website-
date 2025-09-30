import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    title: "여성복",
    description: "우아함과 편안함을 동시에 추구하는 여성을 위한 컬렉션",
    image: "/elegant-womens-fashion-collection-display.jpg",
    items: "120+ 아이템",
  },
  {
    title: "남성복",
    description: "모던하고 세련된 남성의 라이프스타일을 완성하는 의류",
    image: "/sophisticated-mens-fashion-collection-display.jpg",
    items: "85+ 아이템",
  },
  {
    title: "액세서리",
    description: "스타일을 완성하는 프리미엄 액세서리와 소품",
    image: "/luxury-fashion-accessories-and-jewelry-display.jpg",
    items: "60+ 아이템",
  },
]

export function ProductCategories() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-2">제품 카테고리</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            다양한 스타일을 위한 완벽한 선택
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            각각의 카테고리는 고유한 매력과 기능성을 갖추어 여러분의 다양한 순간을 빛내드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  <span className="text-sm text-accent font-medium">{category.items}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
