import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { ImageWithFallback } from "../components/figma/ImageWithFallback"
import { Breadcrumb } from "../components/Breadcrumb"
import { useRouter } from "../components/Router"
import { 
  Heart, MessageCircle, Share2, BookOpen, Plus, Search, 
  TrendingUp, Calendar, User, MoreHorizontal, Image as ImageIcon,
  Video, Smile, Send, ThumbsUp, Eye
} from "lucide-react"
import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    author: {
      name: "Mai Anh Tuấn",
      avatar: null,
      role: "Senior HR Manager"
    },
    content: "Vừa hoàn thành buổi phỏng vấn với một ứng viên rất ấn tượng! Điều khiến tôi nhớ nhất là cách bạn ấy chuẩn bị kỹ lưỡng về công ty và đặt những câu hỏi thông minh. Đây chính là cách để tạo ấn tượng tốt với nhà tuyển dụng! 💼✨\n\n#phongvan #tuyendung #career",
    timestamp: "2 giờ trước",
    likes: 24,
    comments: 8,
    shares: 3,
    views: 156,
    tags: ["Phỏng vấn", "Tuyển dụng", "Career"],
    hasLiked: false,
    type: "text"
  },
  {
    id: 2,
    author: {
      name: "Nguyễn Thị Lan",
      avatar: null,
      role: "UX Designer"
    },
    content: "Tips viết CV cho Designer: \n1. Portfolio là quan trọng nhất!\n2. Thể hiện process design, không chỉ kết quả\n3. Customize CV theo từng job\n4. Sử dụng visual elements nhưng đừng quá lố\n\nAnh chị có tips nào khác không ạ? 🎨",
    image: "https://images.unsplash.com/photo-1565672282630-ff265756849c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NTk2ODAyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    timestamp: "4 giờ trước",
    likes: 42,
    comments: 15,
    shares: 8,
    views: 234,
    tags: ["CV", "Design", "Portfolio"],
    hasLiked: true,
    type: "image"
  },
  {
    id: 3,
    author: {
      name: "Trần Minh Hoàng",
      avatar: null,
      role: "Tech Lead"
    },
    content: "Câu hỏi phỏng vấn khó nhất mình từng gặp: 'Thiết kế hệ thống chat real-time cho 1 triệu users đồng thời'\n\nMình đã trả lời như thế nào? WebSocket, Load Balancer, Redis pub/sub, Database sharding... \n\nAnh em có case nào thú vị khác không? Share nhé! 🚀",
    timestamp: "1 ngày trước",
    likes: 67,
    comments: 23,
    shares: 12,
    views: 445,
    tags: ["Technical", "System Design", "Interview"],
    hasLiked: false,
    type: "discussion"
  }
]

const comments = {
  1: [
    {
      id: 1,
      author: "Phạm Văn Nam",
      content: "Cảm ơn anh đã share! Em cũng đang chuẩn bị phỏng vấn, note lại những tips này.",
      timestamp: "1 giờ trước",
      likes: 3
    },
    {
      id: 2,
      author: "Lê Thị Hoa",
      content: "Đồng ý! Việc research công ty thật sự quan trọng. Em thấy nhiều bạn bỏ qua bước này.",
      timestamp: "45 phút trước",
      likes: 5
    }
  ],
  2: [
    {
      id: 3,
      author: "Đinh Minh Tuấn",
      content: "Thêm một tip: Nên có case study chi tiết về 2-3 projects quan trọng nhất!",
      timestamp: "2 giờ trước",
      likes: 8
    }
  ]
}

export function BlogPage() {
  const { navigateTo } = useRouter()
  const [newPost, setNewPost] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [showComments, setShowComments] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 mx-auto py-6">
        <Breadcrumb 
          items={[
            { label: "Cộng Đồng CV" }
          ]} 
        />

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl mb-2">Cộng Đồng CVGuide</h1>
                <p className="text-muted-foreground">
                  Chia sẻ kinh nghiệm, kết nối và học hỏi từ cộng đồng
                </p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Tạo bài viết
              </Button>
            </div>

            {/* Create Post */}
            <Card>
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarFallback>YU</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-4">
                    <Textarea
                      placeholder="Bạn muốn chia sẻ gì với cộng đồng?"
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      className="min-h-[100px] border-0 focus-visible:ring-0 resize-none"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          <ImageIcon className="w-4 h-4 mr-2" />
                          Ảnh
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Video className="w-4 h-4 mr-2" />
                          Video
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Smile className="w-4 h-4 mr-2" />
                          Emoji
                        </Button>
                      </div>
                      <Button disabled={!newPost.trim()}>
                        <Send className="w-4 h-4 mr-2" />
                        Đăng bài
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    {/* Post Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{post.author.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {post.author.role}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Post Content */}
                    <div className="space-y-4">
                      <p className="whitespace-pre-line leading-relaxed">{post.content}</p>
                      
                      {post.image && (
                        <div className="rounded-lg overflow-hidden">
                          <ImageWithFallback
                            src={post.image}
                            alt="Post image"
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Post Stats */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t">
                      <div className="flex items-center space-x-6">
                        <button 
                          className={`flex items-center space-x-2 text-sm hover:text-red-500 transition-colors ${
                            post.hasLiked ? 'text-red-500' : 'text-muted-foreground'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${post.hasLiked ? 'fill-current' : ''}`} />
                          <span>{post.likes}</span>
                        </button>
                        
                        <button 
                          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                          onClick={() => setShowComments(showComments === post.id ? null : post.id)}
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </button>

                        <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-green-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                          <span>{post.shares}</span>
                        </button>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>

                    {/* Comments Section */}
                    {showComments === post.id && comments[post.id as keyof typeof comments] && (
                      <div className="mt-6 pt-4 border-t space-y-4">
                        <div className="space-y-3">
                          {comments[post.id as keyof typeof comments].map((comment) => (
                            <div key={comment.id} className="flex space-x-3">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback className="text-xs">
                                  {comment.author.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="bg-gray-100 rounded-lg p-3">
                                  <h5 className="text-sm font-medium mb-1">{comment.author}</h5>
                                  <p className="text-sm">{comment.content}</p>
                                </div>
                                <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                                  <span>{comment.timestamp}</span>
                                  <button className="hover:text-blue-500 flex items-center space-x-1">
                                    <ThumbsUp className="w-3 h-3" />
                                    <span>{comment.likes}</span>
                                  </button>
                                  <button className="hover:text-blue-500">Trả lời</button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Add Comment */}
                        <div className="flex space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="text-xs">YU</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 flex space-x-2">
                            <Input placeholder="Viết bình luận..." className="flex-1" />
                            <Button size="sm">
                              <Send className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Tìm kiếm bài viết..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Chủ đề hot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-2 hover:bg-accent rounded-lg cursor-pointer">
                  <span className="text-sm">#CV2024</span>
                  <Badge variant="outline">234</Badge>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-accent rounded-lg cursor-pointer">
                  <span className="text-sm">#PhongVanTechLead</span>
                  <Badge variant="outline">189</Badge>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-accent rounded-lg cursor-pointer">
                  <span className="text-sm">#TuyenDungIT</span>
                  <Badge variant="outline">156</Badge>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-accent rounded-lg cursor-pointer">
                  <span className="text-sm">#CareerTips</span>
                  <Badge variant="outline">143</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Users */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Gợi ý kết nối</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>HT</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-medium">Hoàng Thanh</h4>
                      <p className="text-xs text-muted-foreground">HR Director</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Kết nối</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-medium">Mai Linh</h4>
                      <p className="text-xs text-muted-foreground">Product Manager</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Kết nối</Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-lg">Thống kê cộng đồng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Thành viên</span>
                  <span className="text-sm font-medium">12.5k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Bài viết hôm nay</span>
                  <span className="text-sm font-medium">45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Bình luận hôm nay</span>
                  <span className="text-sm font-medium">128</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}