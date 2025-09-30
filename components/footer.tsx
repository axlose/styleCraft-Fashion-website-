export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight">
              STYLE<span className="text-accent">CRAFT</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              스타일과 품질이 만나는 곳,
              <br />
              StyleCraft와 함께 특별한
              <br />
              패션 여정을 시작하세요.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  회사소개
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  제품
                </a>
              </li>
              <li>
                <a
                  href="#values"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  가치
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  연락처
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold mb-4">제품 카테고리</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  여성복
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  남성복
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  액세서리
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  신상품
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">연락처</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>서울특별시 강남구</li>
              <li>테헤란로 123길 45</li>
              <li>+82 2-1234-5678</li>
              <li>info@stylecraft.co.kr</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 StyleCraft. All rights reserved. | 개인정보처리방침 | 이용약관
          </p>
        </div>
      </div>
    </footer>
  )
}
