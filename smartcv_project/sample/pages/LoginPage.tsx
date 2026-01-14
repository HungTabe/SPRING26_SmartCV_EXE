import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Separator } from "../components/ui/separator"
import { useRouter } from "../components/Router"
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Facebook, Chrome } from "lucide-react"
import { useState } from "react"

export function LoginPage() {
  const { navigateTo } = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button 
          variant="ghost" 
          onClick={() => navigateTo('home')}
          className="mb-6 p-0 h-auto text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại trang chủ
        </Button>

        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="rounded-lg bg-primary p-3">
                <span className="text-primary-foreground font-bold text-xl">CV</span>
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl">Đăng Nhập</CardTitle>
              <CardDescription>
                Truy cập vào tài khoản CVGuide của bạn
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Social Login */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full">
                <Chrome className="w-4 h-4 mr-2" />
                Đăng nhập với Google
              </Button>
              <Button variant="outline" className="w-full">
                <Facebook className="w-4 h-4 mr-2" />
                Đăng nhập với Facebook
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Hoặc</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                    className="pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span>Ghi nhớ đăng nhập</span>
                </label>
                <a href="#" className="text-blue-600 hover:underline">
                  Quên mật khẩu?
                </a>
              </div>

              <Button className="w-full" size="lg">
                Đăng Nhập
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Chưa có tài khoản?{" "}
              <button 
                onClick={() => navigateTo('register')}
                className="text-blue-600 hover:underline font-medium"
              >
                Đăng ký ngay
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mt-8 text-center space-y-4">
          <h3 className="text-lg">Tại sao nên tạo tài khoản?</h3>
          <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Lưu tiến độ học tập</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Truy cập toàn bộ khóa học</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Nhận chứng chỉ hoàn thành</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}