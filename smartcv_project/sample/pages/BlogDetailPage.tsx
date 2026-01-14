import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { ImageWithFallback } from "../components/figma/ImageWithFallback"
import { Breadcrumb } from "../components/Breadcrumb"
import { useRouter } from "../components/Router"
import { Calendar, Clock, User, Heart, MessageCircle, Share2, BookOpen, ArrowLeft } from "lucide-react"

const blogPost = {
  id: 1,
  title: "10 Lỗi Thường Gặp Khi Viết CV và Cách Khắc Phục",
  excerpt: "Những sai lầm phổ biến mà ứng viên thường mắc phải khi tạo CV và hướng dẫn chi tiết cách sửa chữa để có CV ấn tượng hơn.",
  content: `
    <p>Viết CV là bước đầu tiên và quan trọng nhất trong quá trình tìm việc. Tuy nhiên, nhiều ứng viên vẫn mắc phải những lỗi cơ bản khiến CV của họ không được chú ý hoặc thậm chí bị loại ngay từ vòng đầu tiên.</p>

    <h2>1. Thiếu thông tin liên lạc hoặc thông tin không chính xác</h2>
    <p>Đây là lỗi cơ bản nhất nhưng vẫn xảy ra khá phổ biến. Nhiều ứng viên quên ghi số điện thoại, email hoặc ghi sai thông tin này.</p>
    <p><strong>Cách khắc phục:</strong> Luôn kiểm tra kỹ thông tin liên lạc trước khi gửi CV. Đảm bảo email và số điện thoại đều hoạt động và bạn có thể nhận được tin nhắn/cuộc gọi.</p>

    <h2>2. CV quá dài hoặc quá ngắn</h2>
    <p>CV của fresher không nên quá 1 trang, trong khi CV của người có kinh nghiệm có thể 2-3 trang nhưng không nên dài hơn.</p>
    <p><strong>Cách khắc phục:</strong> Tối ưu hóa nội dung, chỉ ghi những thông tin quan trọng và liên quan đến vị trí ứng tuyển.</p>

    <h2>3. Sử dụng font chữ và định dạng không phù hợp</h2>
    <p>Nhiều người sử dụng font chữ quá nhỏ, khó đọc hoặc quá nhiều màu sắc khiến CV trông không chuyên nghiệp.</p>
    <p><strong>Cách khắc phục:</strong> Sử dụng font chữ phổ biến như Arial, Times New Roman với kích thước 11-12pt. Giữ bố cục đơn giản và dễ đọc.</p>

    <h2>4. Không tùy chỉnh CV theo vị trí ứng tuyển</h2>
    <p>Sử dụng cùng một CV cho tất cả các vị trí là sai lầm lớn. Mỗi công việc đều có yêu cầu riêng.</p>
    <p><strong>Cách khắc phục:</strong> Nghiên cứu job description và tùy chỉnh CV để highlight những kinh nghiệm và kỹ năng phù hợp nhất.</p>

    <h2>5. Thiếu từ khóa quan trọng</h2>
    <p>Nhiều công ty sử dụng ATS (Applicant Tracking System) để lọc CV trước khi đến tay HR.</p>
    <p><strong>Cách khắc phục:</strong> Đọc kỹ job description và đưa các từ khóa quan trọng vào CV một cách tự nhiên.</p>

    <h2>6. Không có mục tiêu nghề nghiệp rõ ràng</h2>
    <p>Phần objective/summary giúp nhà tuyển dụng hiểu ngay bạn đang tìm kiếm gì.</p>
    <p><strong>Cách khắc phục:</strong> Viết 2-3 câu ngắn gọn về mục tiêu và giá trị bạn mang lại cho công ty.</p>

    <h2>7. Liệt kê công việc thay vì thành tích</h2>
    <p>Nhiều người chỉ mô tả công việc hàng ngày thay vì highlight những thành tích cụ thể.</p>
    <p><strong>Cách khắc phục:</strong> Sử dụng số liệu cụ thể và động từ hành động để mô tả thành tích.</p>

    <h2>8. Thông tin cá nhân không cần thiết</h2>
    <p>Ghi quá nhiều thông tin cá nhân như chiều cao, cân nặng, tình trạng hôn nhân.</p>
    <p><strong>Cách khắc phục:</strong> Chỉ ghi những thông tin liên quan đến công việc.</p>

    <h2>9. Lỗi chính tả và ngữ pháp</h2>
    <p>Những lỗi nhỏ này có thể để lại ấn tượng không tốt về sự cẩn thận của bạn.</p>
    <p><strong>Cách khắc phục:</strong> Đọc kỹ và nhờ người khác review trước khi gửi.</p>

    <h2>10. Thiếu thông tin về kỹ năng</h2>
    <p>Không đề cập đến soft skills và hard skills phù hợp với vị trí.</p>
    <p><strong>Cách khắc phục:</strong> Tạo section riêng cho skills và đánh giá mức độ thành thạo.</p>

    <h2>Kết luận</h2>
    <p>Tránh được những lỗi trên sẽ giúp CV của bạn trở nên chuyên nghiệp và thu hút hơn. Hãy dành thời gian để hoàn thiện CV và tùy chỉnh cho từng vị trí ứng tuyển.</p>
  `,
  category: "CV Tips",
  author: "Mai Anh Tuấn",
  date: "15/10/2024",
  readTime: "5 phút",
  views: "2.1k",
  likes: 89,
  comments: 23,
  tags: ["CV", "Tuyển dụng", "Career", "Tips"]
}

const relatedPosts = [
  {
    id: 2,
    title: "Cách viết Cover Letter ấn tượng",
    excerpt: "Hướng dẫn viết thư xin việc thu hút nhà tuyển dụng",
    category: "CV Tips",
    readTime: "4 phút"
  },
  {
    id: 3,
    title: "CV cho Fresher: Những điều cần biết",
    excerpt: "Chiến lược viết CV hiệu quả khi chưa có kinh nghiệm",
    category: "CV Tips", 
    readTime: "6 phút"
  },
  {
    id: 4,
    title: "LinkedIn Profile tối ưu cho tìm việc",
    excerpt: "Xây dựng profile LinkedIn chuyên nghiệp",
    category: "Career",
    readTime: "7 phút"
  }
]

export function BlogDetailPage() {
  const { navigateTo } = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 mx-auto py-6">
        <Breadcrumb 
          items={[
            { label: "Blog", page: "blog" },
            { label: blogPost.title }
          ]} 
        />

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="space-y-8">
              {/* Header */}
              <div className="space-y-6">
                <Button 
                  variant="ghost" 
                  onClick={() => navigateTo('blog')}
                  className="p-0 h-auto text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Quay lại Blog
                </Button>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-blue-600">{blogPost.category}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{blogPost.readTime}</span>
                    </div>
                  </div>

                  <h1 className="text-4xl leading-tight">{blogPost.title}</h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {blogPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-b pb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{blogPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{blogPost.date}</span>
                      </div>
                      <span>{blogPost.views} lượt xem</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4 mr-2" />
                        {blogPost.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {blogPost.comments}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Chia sẻ
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565672282630-ff265756849c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NTk2ODAyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Blog post featured image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Tags */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="text-lg">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="hover:bg-accent cursor-pointer">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg mb-1">{blogPost.author}</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Senior HR Consultant với 8+ năm kinh nghiệm trong lĩnh vực tuyển dụng 
                        và phát triển nhân sự tại các công ty công nghệ hàng đầu.
                      </p>
                      <Button variant="outline" size="sm">
                        Xem thêm bài viết
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Table of Contents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Mục Lục
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  1. Thiếu thông tin liên lạc
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  2. CV quá dài hoặc quá ngắn
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  3. Font chữ không phù hợp
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  4. Không tùy chỉnh CV
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  5. Thiếu từ khóa quan trọng
                </a>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bài Viết Liên Quan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedPosts.map((post) => (
                  <div key={post.id} className="space-y-2 p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors">
                    <h4 className="text-sm leading-tight">{post.title}</h4>
                    <p className="text-xs text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-lg">Đăng Ký Newsletter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Nhận thông tin mới nhất về tuyển dụng và career tips
                </p>
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Đăng Ký
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}