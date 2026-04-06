/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Menu, 
  User, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Send, 
  Home, 
  BookOpen, 
  Star, 
  AtSign,
  ChevronRight,
  Instagram,
  Facebook
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body overflow-x-hidden">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 glass flex justify-between items-center px-6 h-16">
        <div className="flex items-center">
          <Menu className="w-6 h-6 text-primary cursor-pointer" />
        </div>
        <h1 className="text-xl font-black tracking-widest text-primary uppercase font-headline">
          DUI SOCIAL
        </h1>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30">
          <img 
            alt="User profile" 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex flex-col justify-end p-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000" 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920" 
              alt="Moody bar interior"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 space-y-4 max-w-lg"
          >
            <p className="font-body text-xs tracking-[0.2em] text-secondary uppercase font-bold">
              Est. Da Nang
            </p>
            <h2 className="font-headline text-5xl font-black tracking-tighter leading-none text-glow">
              A Street Cocktail Bar in An Thuong
            </h2>
            <div className="pt-6">
              <button className="bg-gradient-to-tr from-primary to-primary-container text-on-primary-fixed px-8 py-4 rounded-lg font-bold text-sm tracking-widest uppercase active:scale-95 transition-transform">
                Book a Table
              </button>
            </div>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="px-6 py-20 bg-surface-container-low">
          <div className="max-w-md mx-auto space-y-8">
            <div className="flex items-baseline gap-4">
              <span className="text-6xl font-black text-outline-variant/20 font-headline">01</span>
              <h3 className="font-headline text-3xl font-bold tracking-tight text-primary">Our Story</h3>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-on-surface-variant leading-relaxed text-lg font-medium">
                Dui Social is a hidden gem in the heart of <span className="text-primary italic">An Thuong</span>. We blend the vibrant energy of Da Nang’s street life with the art of mixology.
              </p>
              <p className="text-on-surface-variant leading-relaxed opacity-80">
                From signature cocktails to local vibes, we are the go-to spot for travelers and locals looking for an authentic night experience.
              </p>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-xl overflow-hidden mt-8"
            >
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&q=80&w=800" 
                alt="Mixologist at work"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Our Menu Section */}
        <section id="menu" className="py-20">
          <div className="px-6 mb-12">
            <h3 className="font-headline text-3xl font-bold tracking-tight text-primary mb-2">Our Menu</h3>
            <div className="h-1 w-12 bg-secondary"></div>
          </div>
          
          {/* Horizontal Scroll Menu */}
          <div className="flex overflow-x-auto gap-6 px-6 no-scrollbar pb-8">
            {[
              {
                id: "01",
                name: "The Alchemist Sour",
                ingredients: "Gin, Lemongrass, Local Honey",
                tag: "SIGNATURE #01",
                image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600&h=800"
              },
              {
                id: "02",
                name: "Neon Street Vibe",
                ingredients: "Vodka, Dragonfruit, Chili Rim",
                tag: "DUI SPECIAL",
                image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600&h=800"
              },
              {
                id: "03",
                name: "Midnight in Da Nang",
                ingredients: "Bourbon, Cinnamon, Star Anise",
                tag: "LOCAL VIBE",
                image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=600&h=800"
              }
            ].map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -5 }}
                className="min-w-[280px] group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-surface-container-high">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={item.image} 
                    alt={item.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full">
                    <span className="font-headline font-bold text-primary text-xs tracking-wider">{item.tag}</span>
                  </div>
                </div>
                <p className="font-headline text-lg font-bold text-on-surface">{item.name}</p>
                <p className="text-on-surface-variant text-sm">{item.ingredients}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Review Section */}
        <section id="reviews" className="px-6 py-20 bg-surface-container-lowest">
          <h3 className="font-headline text-3xl font-bold tracking-tight text-center text-primary mb-12">Review us here</h3>
          <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
            <motion.a 
              whileTap={{ scale: 0.98 }}
              href="#" 
              className="flex items-center justify-between bg-surface-container rounded-xl border-l-4 border-secondary p-5 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="font-black text-secondary">G</span>
                </div>
                <span className="font-headline font-bold text-on-surface text-sm uppercase tracking-wider">Review on Google Map</span>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a 
              whileTap={{ scale: 0.98 }}
              href="#" 
              className="flex items-center justify-between bg-surface-container rounded-xl border-l-4 border-primary p-5 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </div>
                <span className="font-headline font-bold text-on-surface text-sm uppercase tracking-wider">Review on TripAdvisor</span>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </section>

        {/* Address Section */}
        <section id="address" className="px-6 py-20 bg-surface">
          <div className="bg-surface-container-high p-8 rounded-3xl space-y-6 max-w-md mx-auto">
            <h3 className="font-headline text-2xl font-bold text-primary">Our Address</h3>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-secondary shrink-0" />
              <p className="text-on-surface text-lg leading-tight">42 An Thuong 2, Da Nang, Viet Nam</p>
            </div>
            <div className="w-full h-48 rounded-2xl overflow-hidden grayscale contrast-125 brightness-75">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                alt="Map of Da Nang"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-20">
          <h3 className="font-headline text-3xl font-bold tracking-tight text-center text-primary mb-12">Connect With Us</h3>
          <div className="flex justify-center gap-8 sm:gap-12 max-w-md mx-auto">
            {[
              { icon: Phone, label: "Phone", href: "tel:+" },
              { icon: MessageCircle, label: "WhatsApp", href: "#" },
              { icon: Send, label: "Zalo", href: "#" }
            ].map((item) => (
              <motion.a 
                key={item.label}
                whileHover={{ y: -5 }}
                href={item.href}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-body text-[10px] tracking-widest text-on-surface-variant uppercase font-bold">{item.label}</span>
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest py-16 px-6 flex flex-col items-center gap-8 text-center border-t border-outline-variant/10">
        <h4 className="text-xl font-black text-primary font-headline tracking-widest uppercase">DUI SOCIAL</h4>
        <div className="flex gap-10">
          <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
        <div className="space-y-2">
          <p className="text-xs tracking-widest uppercase text-on-surface-variant/60">© 2024 THE STREET ALCHEMIST. DA NANG.</p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/40">Crafted with passion for the night</p>
        </div>
      </footer>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe glass z-50 border-t border-outline-variant/10">
        <motion.a 
          whileTap={{ scale: 0.9 }}
          href="#" 
          className="flex flex-col items-center justify-center bg-gradient-to-tr from-primary to-primary-container text-on-primary rounded-full p-3 shadow-lg shadow-primary/20"
        >
          <Home className="w-6 h-6" />
        </motion.a>
        <motion.a 
          whileTap={{ scale: 0.9 }}
          href="#menu" 
          className="flex flex-col items-center justify-center text-on-surface-variant p-3 hover:text-primary transition-colors"
        >
          <BookOpen className="w-6 h-6" />
        </motion.a>
        <motion.a 
          whileTap={{ scale: 0.9 }}
          href="#reviews" 
          className="flex flex-col items-center justify-center text-on-surface-variant p-3 hover:text-primary transition-colors"
        >
          <Star className="w-6 h-6" />
        </motion.a>
        <motion.a 
          whileTap={{ scale: 0.9 }}
          href="#contact" 
          className="flex flex-col items-center justify-center text-on-surface-variant p-3 hover:text-primary transition-colors"
        >
          <AtSign className="w-6 h-6" />
        </motion.a>
      </nav>
    </div>
  );
}
