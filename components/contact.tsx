"use client"

import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-primary uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-serif text-[32px] text-foreground text-balance">
            {"Let's Work Together"}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              I&apos;m always excited to connect with fellow developers, potential collaborators, 
              and anyone interested in building something amazing. Whether you have a project 
              in mind or just want to say hello, feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:hello@alexchen.dev" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    hello@alexchen.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
              />
            </div>

            <Button 
              type="submit"
              className="w-full sm:w-auto px-8 py-6 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
