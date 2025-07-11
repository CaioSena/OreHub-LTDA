import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Presentation, Calendar, Code, MapPin, Clock, Star, Bookmark, Network } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-purple-blue rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white text-lg" size={20} />
              </div>
              <span className="text-2xl font-bold text-slate-700">UniConecta</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Button variant="ghost" className="text-slate-700 hover:text-primary font-medium transition-colors duration-200">
                <Users className="mr-2" size={16} />
                Groups
              </Button>
              <Button variant="ghost" className="text-slate-700 hover:text-primary font-medium transition-colors duration-200">
                <Presentation className="mr-2" size={16} />
                Mentoring
              </Button>
              <Button variant="ghost" className="text-slate-700 hover:text-primary font-medium transition-colors duration-200">
                <Calendar className="mr-2" size={16} />
                Events
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4">
            <Button variant="ghost" className="w-full justify-start text-slate-700 hover:text-primary font-medium">
              <Users className="mr-3" size={16} />
              Groups
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-700 hover:text-primary font-medium">
              <Presentation className="mr-3" size={16} />
              Mentoring
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-700 hover:text-primary font-medium">
              <Calendar className="mr-3" size={16} />
              Events
            </Button>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-700 mb-6 leading-tight">
              Connecting{" "}
              <span className="text-primary">education</span>,{" "}
              <span style={{ color: "hsl(213, 93%, 68%)" }}>community</span> and{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                opportunity
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of students, educators, and professionals building the future together through collaborative learning and meaningful connections.
            </p>
            <Button className="gradient-purple-blue text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Get Started Today
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </section>

        {/* Activity Feed */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-700 mb-8 text-center">Latest Opportunities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Course Card */}
              <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                    alt="Programming course setup" 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">Course</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="icon" variant="secondary" className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full">
                      <Bookmark className="text-primary" size={16} />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 gradient-purple-blue rounded-full flex items-center justify-center mr-3">
                      <Code className="text-white" size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-700">Advanced Web Development</h3>
                      <p className="text-sm text-gray-500">Prof. Maria Rodriguez</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Master modern web technologies including React, Node.js, and cloud deployment. Build real-world applications with industry best practices.
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="mr-1" size={14} />
                        12 weeks
                      </span>
                      <span className="flex items-center">
                        <Users className="mr-1" size={14} />
                        234 students
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">4.9</span>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-purple-blue text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>

              {/* Event Card */}
              <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                    alt="Professional networking event" 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-white px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: "hsl(213, 93%, 68%)" }}>Event</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="icon" variant="secondary" className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full">
                      <Bookmark style={{ color: "hsl(213, 93%, 68%)" }} size={16} />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 gradient-blue-purple rounded-full flex items-center justify-center mr-3">
                      <Network className="text-white" size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-700">Tech Career Fair 2024</h3>
                      <p className="text-sm text-gray-500">UniConecta Events</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Connect with top tech companies, attend exclusive workshops, and discover your dream career. Over 50 companies will be present.
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        Dec 15, 2024
                      </span>
                      <span className="flex items-center">
                        <Users className="mr-1" size={14} />
                        1.2k attending
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin style={{ color: "hsl(213, 93%, 68%)" }} className="mr-1" size={14} />
                      <span className="text-gray-600">Virtual</span>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-blue-purple text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                    Join Event
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-purple-blue rounded-3xl p-8 md:p-12 text-center text-white mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Future?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community of learners, mentors, and industry professionals. Your journey to success starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Create Free Account
              </Button>
              <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 gradient-purple-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-white text-2xl" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">Study Groups</h3>
            <p className="text-gray-600">Connect with peers, form study groups, and learn together in collaborative environments.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 gradient-blue-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Presentation className="text-white text-2xl" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">Expert Mentoring</h3>
            <p className="text-gray-600">Get guidance from industry professionals and experienced educators in your field.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 gradient-purple-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-white text-2xl" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">Live Events</h3>
            <p className="text-gray-600">Attend workshops, seminars, and networking events to expand your knowledge and connections.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 gradient-purple-blue rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white text-lg" size={20} />
                </div>
                <span className="text-2xl font-bold">UniConecta</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Connecting education, community and opportunity. Building the future through collaborative learning and meaningful connections.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.223.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-blue-400">Groups</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-blue-400">Mentoring</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-blue-400">Events</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-blue-400">Courses</Button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-blue-400">Help Center</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-blue-400">Contact Us</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-blue-400">Privacy Policy</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-blue-400">Terms of Service</Button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 UniConecta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
