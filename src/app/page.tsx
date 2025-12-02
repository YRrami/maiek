/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Instagram,
  Mail,
  ArrowUpRight,
  Sparkles,
  Zap,
  Eye,
  Heart,
} from 'lucide-react';

export default function MaieKPortfolio() {
  interface Project {
    id: number;
    title: string;
    subtitle: string;
    category: string;
    size: 'small' | 'medium' | 'large';
    imageUrl: string;
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredService, setHoveredService] = useState<string | null>(null); // intentionally unused

  // NEW: simple loading gate for Anonvic copyright screen
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // NEW: auto-hide loading screen after ~2.2s
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5200);
    return () => clearTimeout(timer);
  }, []);

  // =========================
  // PROJECTS IMAGES (5 ITEMS)
  // =========================
  const projects: Project[] = [
    {
      id: 1,
      title: 'Scarf Design for Malan',
      subtitle: 'Playful resort capsule with repeating pastel florals.',
      category: 'Textile Story',
      size: 'large',
      // PROJECT IMAGE 1
      imageUrl: '/images/projects/Malan.jpg',
    },
    {
      id: 2,
      title: 'Branding for honn',
      subtitle: 'Wordmarks, badges, and logo locks inspired by her signature.',
      category: 'Brand Identity',
      size: 'medium',
      // PROJECT IMAGE 2
      imageUrl: '/images/projects/brandinng.jpg',
    },
    {
      id: 3,
      title: 'Bag design for Zaam',
      subtitle: 'Modular print tiles that snap together like a pattern puzzle.',
      category: 'Print Design',
      size: 'medium',
      // PROJECT IMAGE 3
      imageUrl: '/images/projects/zaam.jpg',
    },
    {
      id: 4,
      title: 'Scarf design for Malan',
      subtitle: 'Scroll-friendly layouts for a digital launch story.',
      category: 'fashion',
      size: 'large',
      // PROJECT IMAGE 4
      imageUrl: '/images/projects/maln2.jpg',
    },
    {
      id: 5,
      title: 'pattern design for Malan',
      subtitle: 'Patterns that looks alive .',
      category: 'fashion',
      size: 'medium',
      // PROJECT IMAGE 5
      imageUrl: '/images/projects/pattern.jpg',
    },
  ];

  // ====================================
  // HERO COLLAGE IMAGES
  // ====================================
  const heroImages: string[] = [
    // HERO IMAGE 1: main hero piece
    '/images/hero/hero1.jpg',
    // HERO IMAGE 2: textile close-up
    '/images/hero/hero2.jpg',
    // HERO IMAGE 3: abstract brush / pattern
    '/images/hero/hero5.jpg',
    // HERO IMAGE 4: branding layout
    '/images/hero/hero3.jpg',
    // HERO IMAGE 5: gradient field
    '/images/hero/hero4.jpg',
  ];

  // =========================================
  // SERVICES IMAGES
  // =========================================
  const services = [
    {
      key: 'textile',
      title: 'Textile stories',
      tag: 'Prints & repeats',
      desc: 'From tiny ditsy florals to bold statement graphics, all prepped print-ready for your mills.',
      // SERVICE IMAGE 1
      imageUrl: '/images/services/service1.jpg',
    },
    {
      key: 'brand',
      title: 'Brand glow-ups',
      tag: 'Logos & systems',
      desc: 'Soft-but-smart visual identities that feel like your brand, just turned up a little.',
      // SERVICE IMAGE 2
      imageUrl: '/images/services/service2.jpg',
    },
    {
      key: 'digital',
      title: 'Digital candy',
      tag: 'Web & socials',
      desc: 'Landing pages and content templates that keep every post feeling on-brand and intentional.',
      // SERVICE IMAGE 3
      imageUrl: '/images/services/service3.jpg',
    },
    {
      key: 'production',
      title: 'Production magic',
      tag: 'Adobe expert',
      desc: 'Neat layers, tidy artboards, and handover files that make developers and printers quietly happy.',
      // SERVICE IMAGE 4
      imageUrl: '/images/services/pattern.jpg',
    },
  ];

  // ABOUT SECTION IMAGE
  // ABOUT IMAGE: Maie’s studio workspace / desk shot
  const aboutImage = '/images/about/maiek.jpg';

  const playfulNote = (who: string) => `Dear ${who}, remember to add more pink.`; // intentionally unused helper

  const currentYear = new Date().getFullYear();




  return (
    <div className="min-h-screen bg-[#FFF6FB] text-[#201332] overflow-x-hidden relative">
      {/* =============================== */}
      {/* ANONVIC LOADING / COPYRIGHT LAYER */}
      {/* =============================== */}
    {isLoading && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 text-slate-100">
    {/* Soft gradient glow behind */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,#f97373,transparent_60%)] opacity-40 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,#6366f1,transparent_65%)] opacity-45 blur-3xl" />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.22] bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:72px_72px]" />
    </div>

    {/* Center card */}
    <div className="relative flex flex-col items-center gap-6 px-6">
      <div className="relative">
        {/* Glow frame */}
        <div className="absolute inset-[-10px] rounded-3xl bg-[conic-gradient(from_200deg_at_50%_50%,rgba(251,113,133,0.12),rgba(94,234,212,0.12),rgba(129,140,248,0.24),rgba(15,23,42,0.4),rgba(251,113,133,0.12))] blur-2xl opacity-80" />
        
        {/* Main logo tile */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-slate-900/90 border border-slate-600/70 flex items-center justify-center shadow-[0_28px_90px_rgba(15,23,42,0.95)] overflow-hidden animate-loaderPulse">
          {/* Rotating ring */}
          <div className="absolute w-[145%] h-[145%] rounded-[40%] border-t-2 border-fuchsia-400/75 border-l-2 border-sky-400/70 border-r-2 border-transparent border-b-2 border-transparent animate-spin" />
          
          {/* ANONVIC LOGO:
              Place your logo file at:
              /public/images/anonvic/anonvic-logo.svg
              and update the path below if needed. */}
          <img
            src="/images/anonvic/logo.png"
            alt="Anonvic logo"
            className="relative w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-[0_8px_22px_rgba(15,23,42,0.85)]"
          />
        </div>

        {/* Label under logo */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[0.7rem] tracking-[0.28em] uppercase text-slate-400">
          anonvic
        </div>
      </div>

      {/* Copy text */}
      <div className="text-center space-y-2 mt-6">
        <p className="text-[0.7rem] md:text-xs tracking-[0.28em] uppercase text-slate-400">
          powering this experience
        </p>
        <p className="text-sm md:text-base text-slate-100">
          Website software © {currentYear}{' '}
          <span className="hidden sm:inline">·</span>{' '}
          <a
            href="https://anonvic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-rose-300 hover:text-rose-200 underline underline-offset-4 decoration-rose-400/60"
          >
            anonvic.com
          </a>
        </p>
        <p className="text-[0.7rem] md:text-xs text-slate-400">
          Designed, engineered & maintained by Anonvic.
        </p>
      </div>

      {/* Loading bar */}
      <div className="mt-4 w-44 md:w-64 h-[3px] rounded-full bg-slate-800 overflow-hidden border border-slate-700/70">
        <div className="h-full w-1/2 bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-400 animate-loaderBar" />
      </div>

      {/* Bottom micro-copy */}
      <p className="mt-4 text-[0.68rem] text-slate-500 text-center">
        Preparing the canvas for Maie’s world…
      </p>
    </div>
  </div>
)}

      {/* Background blobs + confetti dots */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute w-[620px] h-[620px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(121,96,255,0.55) 0%, transparent 70%)',
            left: `${-8 + scrollY * 0.02}%`,
            top: `${-6 + Math.sin(scrollY * 0.001) * 10}%`,
            transition: 'all 0.3s ease-out',
          }}
        />
        <div
          className="absolute w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              'radial-gradient(circle, rgba(255,105,135,0.6) 0%, transparent 70%)',
            right: `${-6 + scrollY * 0.02}%`,
            bottom: `${-8 + Math.cos(scrollY * 0.001) * 10}%`,
            transition: 'all 0.3s ease-out',
          }}
        />

        {/* tiny specks */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.9)_0,transparent_45%),radial-gradient(circle_at_80%_10%,rgba(255,229,242,0.9)_0,transparent_45%),radial-gradient(circle_at_20%_80%,rgba(229,231,255,0.9)_0,transparent_50%)] opacity-60" />
      </div>


















      {/* Custom cursor – hidden during loading */}
      {!isLoading && (
        <div
          className="fixed w-7 h-7 pointer-events-none z-50 mix-blend-screen"
          style={{
            left: cursorPos.x - 14,
            top: cursorPos.y - 14,
            transition: 'width 0.2s, height 0.2s',
          }}
        >
          <div
            className={`w-full h-full rounded-full border-2 border-[#FF8AA4] bg-[#FF8AA4]/15 ${
              isHovering ? 'scale-150' : 'scale-100'
            } transition-transform`}
          ></div>
        </div>
      )}

      {/* NAV */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div className="bg-white/60 backdrop-blur-xl border border-[#E0D4FF] rounded-full px-6 md:px-8 py-3 shadow-[0_18px_45px_rgba(158,128,255,0.35)]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="flex flex-col -space-y-1">
                <span className="text-[1.7rem] leading-none font-black tracking-tight bg-[radial-gradient(circle_at_20%_20%,#FF617D,#FF9BB5)] bg-clip-text text-transparent">
                  Maie k.
                </span>
                <span className="text-[0.6rem] tracking-[0.28em] uppercase text-[#9C8AF7]"></span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-7 text-sm font-medium ">
              <a
                href="#work"
                className="text-[#4A3B8E] hover:text-[#201332] transition-colors"
              >
                Work
              </a>
              <a
                href="#services"
                className="text-[#4A3B8E] hover:text-[#201332] transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-[#4A3B8E] hover:text-[#201332] transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-[#FF617D] rounded-full text-sm font-semibold text-white hover:bg-[#ff8097] transition-all flex items-center gap-2 shadow-[0_12px_35px_rgba(255,97,125,0.65)]"
              >
                Say hi
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <button
              className="md:hidden "
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 bg-white/60 backdrop-blur-2xl border border-[#E0D4FF] rounded-3xl p-6 shadow-2xl shadow-[rgba(54,35,151,0.25)] animate-sectionFade ">
            <div className="flex flex-col gap-4 text-base font-medium ">
              <a
                href="#work"
                className="text-[#201332] hover:text-[#FF617D] transition-colors"
              >
                Work
              </a>
              <a
                href="#services"
                className="text-[#201332] hover:text-[#FF617D] transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-[#201332] hover:text-[#FF617D] transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-[#201332] hover:text-[#FF617D] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO – collage wall */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-36 pb-32 md:pb-36">
        {/* floating chip */}
        <div className="pointer-events-none absolute inset-0 max-w-7xl mx-auto">
          <div className="hidden md:block absolute right-8 bottom-10 animate-chipFloatDelay">
            <div className="rounded-full px-4 py-1 bg-[#FFEDF3] border border-[#FFC3D5] text-xs uppercase tracking-[0.18em] text-[#E14468] shadow-[0_10px_24px_rgba(255,146,173,0.5)]">
              made with love by maie
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 animate-sectionFade">
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 lg:gap-16 items-center">
            {/* text column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 border border-[#E0D4FF] rounded-full backdrop-blur-sm">
                <Zap className="w-4 h-4 text-[#FF617D]" />
                <span className="text-xs md:text-sm font-semibold text-[#5B489F] tracking-[0.26em] uppercase">
                  adobe certified · textile & brand designer
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-[2.7rem] md:text-[3.4rem] lg:text-[3.8rem] font-black leading-tight md:leading-[1.05] tracking-tight">
                  <span className="block text-[#3A2A7C]">
                    Soft, playful visuals
                  </span>
                  <span className="block bg-[radial-gradient(circle_at_10%_0%,#FF617D,#FF9BB5)] bg-clip-text text-transparent animate-heroGradient">
                    for seriously bold brands.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-[#5F4E9F] leading-relaxed max-w-xl">
                  Maie blends color, texture, and tiny details into full visual
                  worlds – from fabrics and wordmarks to scroll-worthy launch
                  pages.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#work"
                  className="group px-8 py-4 bg-[#FF617D] rounded-full font-semibold text-base md:text-lg text-white hover:bg-[#ff8097] transition-all flex items-center gap-3 shadow-[0_18px_40px_rgba(255,97,125,0.75)]"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Peek into her world
                  <Eye className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/maiek.designs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 border border-[#E0D4FF] rounded-full font-semibold text-base md:text-lg text-[#3A2A7C] hover:border-[#FF8AA4] hover:bg-white transition-all flex items-center gap-3"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Instagram className="w-5 h-5" />
                  Follow the sketches
                </a>
              </div>
            </div>

            {/* collage column */}
            <div className="relative h-[430px] md:h-[500px] lg:h-[560px] mt-6 lg:mt-0">
              {/* animated gradient blobs behind collage */}
              <div className="absolute -left-10 md:-left-16 top-4 w-40 h-40 md:w-56 md:h-56 rounded-full bg-[radial-gradient(circle,#FF9BB5,transparent_65%)] opacity-60 blur-2xl animate-blobDrift" />
              <div className="absolute right-0 md:-right-6 bottom-0 w-40 h-40 md:w-64 md:h-64 rounded-full bg-[radial-gradient(circle,#4F3BC8,transparent_65%)] opacity-50 blur-3xl animate-blobDrift" />

              {/* main collage canvas */}
              <div className="relative w-full h-full">
                {/* central large card – heroImages[0] */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-4 md:top-0 w-[72%] md:w-[68%] h-[58%] md:h-[64%] rounded-[2rem] bg-white border border-[#E0D4FF] shadow-[0_24px_70px_rgba(129,111,217,0.45)] overflow-hidden -rotate-2"
                  style={{
                    animation: 'collageFloat 9s ease-in-out infinite',
                    animationDelay: '0s',
                  }}
                >
                  {/* HERO COLLAGE IMAGE A: main piece from heroImages[0] */}
                  <img
                    src={heroImages[0]}
                    alt="Hero textile collage"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A1B68]/60 via-transparent to-white/30" />
                  <div className="absolute left-5 bottom-4 bg-white/90 border border-[#E0D4FF] rounded-full px-4 py-1.5 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FF617D]" />
                    <span className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-[#5F4E9F]">
                      signature scarf story
                    </span>
                  </div>
                </div>

                {/* tall card – heroImages[1] */}
                <div
                  className="hidden sm:block absolute left-0 md:-left-4 bottom-10 w-[30%] md:w-[26%] h-[58%] rounded-[1.6rem] bg-white border border-[#E0D4FF] shadow-[0_18px_50px_rgba(73,43,167,0.4)] overflow-hidden -rotate-8"
                  style={{
                    animation: 'collageFloat 11s ease-in-out infinite',
                    animationDelay: '0.4s',
                  }}
                >
                  {/* HERO COLLAGE IMAGE B: close-up textile from heroImages[1] */}
                  <img
                    src={heroImages[1]}
                    alt="Textile close-up"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <div className="absolute left-3 bottom-3 px-3 py-1 rounded-full bg-white/85 text-[0.65rem] font-medium text-[#5847B1]">
                    textile swatch
                  </div>
                </div>

                {/* medium card – heroImages[2] */}
                <div
                  className="absolute right-0 md:right-4 top-8 w-[34%] md:w-[30%] h-[38%] rounded-[1.7rem] bg-white border border-[#E0D4FF] shadow-[0_18px_50px_rgba(73,43,167,0.4)] overflow-hidden rotate-7"
                  style={{
                    animation: 'collageFloat 10s ease-in-out infinite',
                    animationDelay: '0.9s',
                  }}
                >
                  {/* HERO COLLAGE IMAGE C: abstract pattern from heroImages[2] */}
                  <img
                    src={heroImages[2]}
                    alt="Abstract pattern"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#1D124E]/50" />
                  <div className="absolute left-3 top-3 px-3 py-1 rounded-full bg-white/90 text-[0.65rem] font-medium text-[#E14468]">
                    pattern in motion
                  </div>
                </div>

                {/* wide strip – project image (Malan or Zaam) */}
                <div
                  className="absolute right-4 md:right-10 bottom-4 w-[55%] md:w-[50%] h-[26%] rounded-[1.8rem] bg-white border border-[#E0D4FF] shadow-[0_22px_55px_rgba(73,43,167,0.45)] overflow-hidden -rotate-3"
                  style={{
                    animation: 'collageFloat 12s ease-in-out infinite',
                    animationDelay: '1.4s',
                  }}
                >
                  {/* COLLAGE IMAGE D: one of the project visuals, e.g. Malan look */}
                  <img
                    src={projects[0].imageUrl}
                    alt="Project collage preview"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2A1B68]/55 via-transparent to-white/20" />
                  <div className="absolute left-4 bottom-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF617D]" />
                    <span className="text-[0.7rem] font-medium text-white">
                      Malan capsule preview
                    </span>
                  </div>
                </div>

                {/* small circular chip – pattern project */}
                <div
                  className="absolute left-10 md:left-16 top-[54%] w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-[#E0D4FF] shadow-[0_12px_30px_rgba(73,43,167,0.45)] overflow-hidden"
                  style={{
                    animation: 'collageFloat 13s ease-in-out infinite',
                    animationDelay: '1.9s',
                  }}
                >
                  {/* COLLAGE IMAGE E: pattern project thumbnail */}
                  <img
                    src={projects[4].imageUrl}
                    alt="Pattern detail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* little film strip using heroImages[3] + heroImages[4] */}
                <div
                  className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 -bottom-10 bg-white/95 border border-[#E0D4FF] rounded-full px-3 py-2 shadow-[0_16px_35px_rgba(158,128,255,0.35)]"
                  style={{
                    animation: 'collageFloat 14s ease-in-out infinite',
                    animationDelay: '2.2s',
                  }}
                >
                  <div className="relative w-9 h-9 rounded-full overflow-hidden bg-[#F5ECFF] border border-[#E0D4FF]">
                    {/* COLLAGE IMAGE F: branding layout from heroImages[3] */}
                    <img
                      src={heroImages[3]}
                      alt="Mini branding preview"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative w-9 h-9 rounded-full overflow-hidden bg-[#F5ECFF] border border-[#E0D4FF]">
                    {/* COLLAGE IMAGE G: gradient field from heroImages[4] */}
                    <img
                      src={heroImages[4]}
                      alt="Gradient preview"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[0.7rem] font-medium text-[#7C6BDE]">
                    a tiny slice of her world
                  </span>
                </div>

                {/* Maie logo badge */}
                <div className="absolute -bottom-10 right-2 md:right-8 w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#4F3BC8] border-[6px] border-white flex flex-col items-center justify-center shadow-[0_18px_45px_rgba(83,63,194,0.7)] animate-badgeFloat">
                  <span className="text-base md:text-lg font-black text-white drop-shadow-[0_3px_0_rgba(0,0,0,0.25)]">
                    Maie k.
                  </span>
                  <span className="text-[0.6rem] text-[#FAD4DF] mt-0.5">
                    designs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-10 border-y border-[#E1D7FF] bg-white/80 backdrop-blur-md overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-sm md:text-base font-semibold mx-6 text-[#3A2A7C] tracking-[0.22em] uppercase">
                textile dreams
              </span>
              <Heart className="w-4 h-4 text-[#FF8AA4] mx-3 animate-heartBeat" />
              <span className="text-sm md:text-base font-semibold mx-6 text-[#3A2A7C] tracking-[0.22em] uppercase">
                candy-colored brands
              </span>
              <Sparkles className="w-5 h-5 text-[#FFB7CD] mx-3" />
              <span className="text-sm md:text-base font-semibold mx-6 text-[#3A2A7C] tracking-[0.22em] uppercase">
                scrollable stories
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center animate-sectionFade space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#201332]">
              Little worlds Maie built
            </h2>
            <p className="text-base md:text-lg text-[#5F4E9F] max-w-2xl mx-auto">
              Five snapshots from fabrics, brands, and screens where color and
              structure hold hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 auto-rows-[300px]">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-[2rem] cursor-pointer border border-[#E0D4FF] bg-white/95 hover:border-[#FF8AA4] transition-all
                  ${
                    project.size === 'large'
                      ? 'md:col-span-2 md:row-span-2'
                      : project.size === 'medium'
                      ? 'md:col-span-2'
                      : 'md:col-span-1'
                  }`}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{
                  animation: 'cardFadeIn 0.7s ease-out forwards',
                  animationDelay: `${index * 0.12}s`,
                }}
              >
                {/* PROJECT THUMBNAIL: project.imageUrl */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1B68]/85 via-[#2A1B68]/35 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />

                <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 border border-[#E0D4FF] text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#866FE5]">
                      {project.category}
                    </span>
                    <div className="rounded-full w-9 h-9 flex items-center justify-center bg-white/90 text-[#FF617D] shadow-[0_10px_22px_rgba(0,0,0,0.25)] group-hover:animate-bounceSoft">
                      <Heart className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1 pt-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-[0_3px_7px_rgba(0,0,0,0.45)]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#FCE8F1]">{project.subtitle}</p>
                    <button className="mt-3 inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.18em] uppercase text-[#FFD3DF]">
                      View mini case
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-32 px-6 bg-gradient-to-b from-[#FFF6FB] via-[#F5EEFF] to-[#FFF6FB]"
      >
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center animate-sectionFade space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#201332]">
              How Maie can help
            </h2>
            <p className="text-base md:text-lg text-[#5F4E9F] max-w-2xl mx-auto">
              Think of it as a tiny studio in one person: dreamy aesthetics with
              organised, handover-ready files.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={service.key}
                className="group relative"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setHoveredService(service.key);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setHoveredService(null);
                }}
                style={{
                  animation: 'cardFadeIn 0.7s ease-out forwards',
                  animationDelay: `${i * 0.14 + 0.1}s`,
                }}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-[1.8rem] border border-[#E0D4FF] hover:border-[#FF9BB5] transition-all hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(134,111,229,0.4)] overflow-hidden">
                  <div className="h-40 w-full overflow-hidden relative">
                    {/* SERVICE CARD IMAGE: service.imageUrl */}
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/95" />
                    <div className="absolute left-4 bottom-4 rounded-full px-3 py-1 bg-[#FF617D] text-[0.65rem] tracking-[0.16em] uppercase text-white flex items-center gap-1 shadow-[0_12px_35px_rgba(255,97,125,0.7)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      {service.tag}
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-semibold text-[#201332]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#5F4E9F] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-sectionFade space-y-5">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#201332]">
              Meet Maie
            </h2>
            <div className="space-y-5 text-base md:text-lg text-[#5F4E9F] leading-relaxed max-w-xl">
              <p>
                Hi, I’m{' '}
                <span className="text-[#FF617D] font-semibold">Maie</span> — a
                designer who believes colors have personalities and every brand
                deserves its own tiny universe.
              </p>
              <p>
                I mix textile craft, branding, and digital design into one
                playful practice. The results: prints that move, logos with
                attitude, and layouts that feel like a beautifully organised
                moodboard.
              </p>
              <p>
                Under the sparkles it’s all structure: tidy grids, accessible
                typography, and production-ready files that make it easy for
                your team to keep the magic going.
              </p>
            </div>
          </div>

          <div
            className="relative h-[440px] animate-sectionFade"
            style={{ animationDelay: '0.15s' as any }}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-white/90 border border-[#E0D4FF] shadow-[0_25px_70px_rgba(129,111,217,0.45)] overflow-hidden">
              {/* ABOUT IMAGE: aboutImage */}
              <img
                src={aboutImage}
                alt="Maie's studio workspace"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF6FB] via-transparent to-[#E6DDFF]/60" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 border border-[#E0D4FF] rounded-2xl px-5 py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#9C8AF7] uppercase tracking-[0.18em] mb-1">
                    fun fact
                  </p>
                  <p className="text-sm md:text-base font-semibold text-[#201332]">
                    Will rearrange a color palette until it “feels like a hug”.
                  </p>
                </div>
                <Sparkles className="w-8 h-8 text-[#FF8AA4]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-[#FFF6FB] via-[#F5EEFF] to-[#FFE9F3]"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-sectionFade space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#201332]">
              Ready for a color crush?
            </h2>

            <p className="text-lg md:text-xl text-[#5F4E9F] max-w-2xl mx-auto">
              Share your launch, collection, or idea. Maie will bring the
              palettes, patterns, and pixels — you bring the dream.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-6">
              <a
                href="mailto:maiekattan@gmail.com"
                className="group w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 border border-[#E0D4FF] flex items-center justify-center hover:border-[#FF8AA4] hover:bg-[#FFF2F6] transition-all hover:shadow-[0_18px_40px_rgba(158,128,255,0.45)]"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Mail size={30} className="text-[#3A2A7C]" />
              </a>
              <a
                href="https://www.instagram.com/maiek.designs/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 border border-[#E0D4FF] flex items-center justify-center hover:border-[#FF8AA4] hover:bg-[#FFF2F6] transition-all hover:shadow-[0_18px_40px_rgba(158,128,255,0.45)]"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Instagram size={30} className="text-[#3A2A7C]" />
              </a>
            </div>

            <a
              href="mailto:maiekattan@gmail.com"
              className="group text-2xl md:text-3xl font-semibold text-[#FF617D] hover:text-[#FF8AA4] transition-colors inline-flex items-center gap-3 break-all"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              maiekattan@gmail.com
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#E1D7FF] bg-white/90">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-2">
          <div className="text-xl font-semibold bg-[radial-gradient(circle_at_30%_30%,#FF617D,#FF9BB5,#FFFFFF)] bg-clip-text text-transparent">
            Maie k. · Designs with a soft punch
          </div>
          <p className="text-sm text-[#7C6BDE]">
            © {currentYear} Maie Kattan. Built with color, care, and a tiny bit
            of chaos.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-[#120A33]/70 backdrop-blur-xl z-50 flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-[#FF8AA4] transition-colors z-10"
            onClick={() => setSelectedProject(null)}
          >
            <X size={40} />
          </button>

          <div
            className="max-w-5xl w-full transform scale-95 animate-modalIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video rounded-[2rem] overflow-hidden mb-6 border border-[#E0D4FF] bg-[#1B1647]/90 relative">
              {/* MODAL HERO IMAGE: selectedProject.imageUrl */}
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120A33]/90 via-transparent to-transparent" />
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex px-4 py-1 bg-white/90 border border-[#E0D4FF] rounded-full text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#7C6BDE]">
                {selectedProject.category}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm md:text-base text-[#FCE8F1] max-w-xl mx-auto">
                {selectedProject.subtitle}
              </p>
              <p className="text-xs text-[#BEB0FF]">
                Tap anywhere outside this card to float back to the gallery.
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes tileFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes collageFloat {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(4px);
          }
        }
        @keyframes blobDrift {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(10px, -14px, 0) scale(1.05);
          }
          100% {
            transform: translate3d(-8px, 8px, 0) scale(1.02);
          }
        }
        @keyframes loaderPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.85);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 28px 100px rgba(15, 23, 42, 0.95);
          }
        }
        @keyframes loaderBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(220%);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes sectionFade {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes heroGradient {
          0% {
            filter: saturate(0.9);
          }
          50% {
            filter: saturate(1.2);
          }
          100% {
            filter: saturate(0.9);
          }
        }
        @keyframes sparkle {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-2px) scale(1.15);
            opacity: 0.8;
          }
        }
        @keyframes chipFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @keyframes heartBeat {
          0%,
          100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(0.95);
          }
          75% {
            transform: scale(1.15);
          }
        }
        @keyframes bounceSoft {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        @keyframes badgeFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-8deg);
          }
          50% {
            transform: translateY(-6px) rotate(-4deg);
          }
        }
        .animate-marquee {
          animation: marquee 26s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        .animate-sectionFade {
          animation: sectionFade 0.7s ease-out forwards;
        }
        .animate-modalIn {
          animation: modalIn 0.3s ease-out forwards;
        }
        .animate-heroGradient {
          animation: heroGradient 6s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 2.2s ease-in-out infinite;
        }
        .animate-chipFloatDelay {
          animation: chipFloat 5.4s ease-in-out infinite;
          animation-delay: 0.4s;
        }
        .animate-heartBeat {
          animation: heartBeat 2.8s ease-in-out infinite;
        }
        .animate-badgeFloat {
          animation: badgeFloat 4.8s ease-in-out infinite;
        }
        .animate-blobDrift {
          animation: blobDrift 22s ease-in-out infinite alternate;
        }
        .animate-loaderPulse {
          animation: loaderPulse 1.8s ease-in-out infinite;
        }
        .animate-loaderBar {
          animation: loaderBar 1.6s ease-in-out infinite;
        }
        .group-hover\\:animate-bounceSoft:hover {
          animation: bounceSoft 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
