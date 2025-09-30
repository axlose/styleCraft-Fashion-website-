import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-2">연락처</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">언제든 문의해 주세요</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            StyleCraft에 대한 궁금한 점이나 협업 제안이 있으시면 언제든지 연락해 주시기 바랍니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">본사 위치</h3>
                  <p className="text-muted-foreground text-sm">
                    서울특별시 강남구
                    <br />
                    테헤란로 123길 45
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">전화번호</h3>
                  <p className="text-muted-foreground text-sm">
                    +82 2-1234-5678
                    <br />
                    +82 10-9876-5432
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">이메일</h3>
                  <p className="text-muted-foreground text-sm">
                    info@stylecraft.co.kr
                    <br />
                    support@stylecraft.co.kr
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">운영시간</h3>
                  <p className="text-muted-foreground text-sm">
                    평일 09:00 - 18:00
                    <br />
                    토요일 10:00 - 16:00
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                온라인 쇼핑몰 방문하기
              </Button>
            </div>
          </div>

          {/* Map or Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="StyleCraft Office Building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-2">StyleCraft 본사</h3>
              <p className="text-sm opacity-90">서울 강남구 테헤란로 123길 45</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
