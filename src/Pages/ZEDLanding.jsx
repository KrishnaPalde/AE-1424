import React, { useEffect } from 'react';
import SEO from '../components/common/seo';
import horizontal_logo from '../assets/logo_horizontal.webp';

// --- HELPER COMPONENT FOR SVG BADGES ---
const ZedBadge = ({ metal }) => {
  const g = {
    bronze: ['#E9A86A', '#C77B30', '#8E4E18'],
    silver: ['#EDF1F6', '#A9B4C2', '#76828F'],
    gold: ['#FFE680', '#F0B400', '#B07F00']
  }[metal];
  const L = metal.toUpperCase();
  const id = metal;

  return (
    <svg className="bw" viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={g[0]} />
          <stop offset="0.5" stopColor={g[1]} />
          <stop offset="1" stopColor={g[2]} />
        </linearGradient>
        <radialGradient id={`bh-${id}`} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#fff" stopOpacity="0.65" />
          <stop offset="0.4" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d="M70 150 L48 222 L78 205 L100 224 L100 150 Z" fill="#1746A8" />
      <path d="M130 150 L152 222 L122 205 L100 224 L100 150 Z" fill="#D8631A" />
      <circle cx="100" cy="92" r="80" fill={`url(#bg-${id})`} stroke="#00000022" strokeWidth="2" />
      <circle cx="100" cy="92" r="80" fill={`url(#bh-${id})`} />
      <circle cx="100" cy="92" r="68" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" strokeDasharray="3 6" />
      <text x="100" y="86" textAnchor="middle" fontFamily="Segoe UI,Arial" fontWeight="900" fontSize="40" fill="#fff">ZED</text>
      <text x="100" y="111" textAnchor="middle" fontFamily="Segoe UI,Arial" fontWeight="800" fontSize="15" letterSpacing="2" fill="#fff">{L}</text>
      <text x="100" y="130" textAnchor="middle" fontFamily="Segoe UI,Arial" fontWeight="700" fontSize="8.5" letterSpacing="1.5" fill="#ffffffcc">CERTIFIED</text>
    </svg>
  );
};

// --- MAIN RESPONSIVE COMPONENT ---
const ZedLanding = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 12% 0px' });

    document.querySelectorAll('.rv, .pp').forEach((el) => {
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <div className="zed-responsive-root">
      <SEO 
        title="ZED — One-Stop Solution for Your MSME | Aarti Educare" 
        description="Aarti Educare helps MSMEs achieve Bronze, Silver, & Gold ZED Certification. Unlock government subsidies."
      />

      <style dangerouslySetInnerHTML={{__html: `
        .zed-responsive-root * { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
        .zed-responsive-root {
          --navy:#0B2D6E; --navy-d:#071E4A; --navy-l:#1746A8;
          --saffron:#F47B20; --saffron-d:#D8631A; --gold:#F5B700;
          --green:#1A8A44; --green-l:#27B85C; --wa:#25D366;
          --ink:#0c1424; --mist:#eef3fb; --red:#E5343A; --purple:#7A5CC8;
          font-family:'Segoe UI',-apple-system,BlinkMacSystemFont,'Roboto',sans-serif;
          color:#fff; background:#05101f; overflow-x:hidden; min-height: 100vh;
        }
        
        /* Base styles */
        .wrap { max-width:520px; margin:0 auto; position:relative; overflow:hidden; }
        .zed-responsive-root section { position:relative; padding:42px 22px; overflow:hidden; }
        
        .bg-navy { background:radial-gradient(130% 90% at 20% 0%,#143b91 0%,var(--navy) 50%,var(--navy-d) 100%); }
        .bg-dark { background:radial-gradient(120% 80% at 80% 0%,#16315c 0%,#0a1733 60%,#05101f 100%); }
        .bg-saffron { background:radial-gradient(120% 90% at 80% 10%,#ff9c44 0%,var(--saffron) 55%,var(--saffron-d) 100%); }
        .bg-light { background:linear-gradient(165deg,#fff 0%,var(--mist) 100%); color:var(--ink); }

        .amb { position:absolute; border-radius:50%; filter:blur(3px); opacity:.12; pointer-events:none; }
        .amb.g { background:var(--gold); } .amb.s { background:var(--saffron); } .amb.w { background:#fff; opacity:.06; }
        .a-tr { width:60vw; max-width:300px; height:60vw; max-height:300px; top:-18%; right:-18%; animation:fl1 9s ease-in-out infinite; }
        .a-bl { width:50vw; max-width:240px; height:50vw; max-height:240px; bottom:-14%; left:-16%; animation:fl2 11s ease-in-out infinite; }
        @keyframes fl1 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-22px) scale(1.08);} }
        @keyframes fl2 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(20px) scale(1.06);} }
        .gridtex { position:absolute; inset:0; opacity:.06; pointer-events:none; background-image:linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px); background-size:38px 38px; }

        .grad-gold { background:linear-gradient(90deg,#FFE259,var(--gold),#FF8A00); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
        .kick { font-size:12px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; opacity:.9; }
        .kick.pill { display:inline-block; background:rgba(255,255,255,.15); border:1px solid rgba(255,255,255,.3); padding:7px 15px; border-radius:999px; letter-spacing:.12em; }
        
        .zed-responsive-root h1 { font-size:clamp(30px,9vw,46px); font-weight:900; line-height:1.04; letter-spacing:-.02em; }
        .zed-responsive-root h2 { font-size:clamp(25px,7.5vw,36px); font-weight:900; line-height:1.08; letter-spacing:-.01em; }
        .lead { font-size:clamp(15px,4.2vw,19px); line-height:1.45; font-weight:500; opacity:.95; }
        .tiny { font-size:12px; opacity:.72; line-height:1.4; }

        /* Animations */
        .rv { opacity:0; transform:translateY(34px); transition:opacity .7s cubic-bezier(.2,.8,.3,1),transform .7s cubic-bezier(.2,.8,.3,1); }
        .rv.in { opacity:1; transform:none; }
        .rv.d1 { transition-delay:.08s; } .rv.d2 { transition-delay:.16s; } .rv.d3 { transition-delay:.24s; }
        .rv.d4 { transition-delay:.32s; } .rv.d5 { transition-delay:.4s; } .rv.d6 { transition-delay:.48s; } .rv.d7 { transition-delay:.56s; }
        
        .pp { opacity:0; transform:scale(.65); transition:opacity .6s cubic-bezier(.18,1.4,.4,1),transform .6s cubic-bezier(.18,1.4,.4,1); }
        .pp.in { opacity:1; transform:none; }
        .pp.d1 { transition-delay:.1s; } .pp.d2 { transition-delay:.2s; } .pp.d3 { transition-delay:.3s; } .pp.d4 { transition-delay:.4s; }

        /* Elements */
        .logobar { display:flex; justify-content:center; margin-bottom:20px; }
        .logobar img { height:52px; width:auto; background:rgba(255,255,255,.96); padding:8px 15px; border-radius:14px; box-shadow:0 8px 26px rgba(0,0,0,.3); }

        .qintro { text-align:center; margin-bottom:18px; }
        .qlist { display:flex; flex-direction:column; gap:8px; margin-bottom:20px; }
        .qbubble { display:flex; align-items:center; gap:11px; background:rgba(255,255,255,.09); border:1px solid rgba(255,255,255,.18); border-radius:13px; padding:11px 13px; backdrop-filter:blur(6px); position:relative; }
        .qbubble .qe { font-size:23px; flex-shrink:0; width:34px; text-align:center; }
        .qbubble .qt { flex:1; font-size:14px; font-weight:700; line-height:1.22; }
        .qbubble .qm { font-size:17px; opacity:.5; flex-shrink:0; }

        .reveal-solution { background:linear-gradient(135deg,rgba(245,183,0,.16),rgba(244,123,32,.16)); border:1.5px solid rgba(245,183,0,.45); border-radius:22px; padding:26px 20px; text-align:center; position:relative; overflow:hidden; }
        .reveal-solution .rsbadge { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,var(--green),var(--green-l)); padding:8px 18px; border-radius:999px; font-weight:800; font-size:13px; box-shadow:0 8px 24px rgba(26,138,68,.4); margin-bottom:14px; }
        .reveal-solution .rsbig { font-size:clamp(30px,9vw,44px); font-weight:900; line-height:1.05; letter-spacing:-.02em; margin-bottom:8px; }
        .onestop { display:inline-block; background:linear-gradient(90deg,#FFE259,var(--gold),#FF8A00); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }

        .scrollcue { margin-top:24px; display:flex; flex-direction:column; align-items:center; gap:5px; opacity:.85; }
        .scrollcue .ch { width:20px; height:20px; border-right:3px solid var(--gold); border-bottom:3px solid var(--gold); transform:rotate(45deg); animation:bob 1.5s ease-in-out infinite; }
        @keyframes bob { 0%,100%{transform:rotate(45deg) translate(0,0);} 50%{transform:rotate(45deg) translate(5px,5px);} }

        .zedmark { width:120px; height:120px; position:relative; margin:0 auto 18px; }
        .zedmark .ring { position:absolute; inset:0; border-radius:50%; border:5px solid transparent; }
        .zedmark .r1 { border-top-color:var(--gold); border-right-color:var(--gold); animation:spin 7s linear infinite; }
        .zedmark .r2 { inset:13%; border-bottom-color:var(--saffron); border-left-color:var(--saffron); animation:spin 5s linear infinite reverse; }
        .zedmark .r3 { inset:26%; border-top-color:#fff; border-right-color:#fff; opacity:.7; animation:spin 9s linear infinite; }
        .zedmark .core { position:absolute; inset:35%; border-radius:50%; background:linear-gradient(135deg,var(--saffron),var(--gold)); display:grid; place-items:center; font-weight:900; font-size:24px; box-shadow:0 0 36px rgba(245,183,0,.5); }
        @keyframes spin { to {transform:rotate(360deg);} }
        .shimmer { position:relative; overflow:hidden; }
        .shimmer::after { content:""; position:absolute; top:0; left:-60%; width:42%; height:100%; background:linear-gradient(110deg,transparent,rgba(255,255,255,.5),transparent); transform:skewX(-18deg); animation:sweep 3s ease-in-out infinite; }
        @keyframes sweep { 0%{left:-60%;} 55%,100%{left:150%;} }

        .bignum { font-size:clamp(60px,20vw,100px); font-weight:900; line-height:.88; letter-spacing:-.04em; background:linear-gradient(180deg,#FFE259,var(--gold) 55%,#FF8A00); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; filter:drop-shadow(0 6px 22px rgba(0,0,0,.35)); }

        .moneystrip { display:flex; flex-direction:column; gap:12px; margin-top:22px; }
        .mrow { display:flex; align-items:center; gap:14px; background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.18); border-radius:16px; padding:15px 16px; backdrop-filter:blur(6px); position:relative; overflow:hidden; }
        .mrow .mic { font-size:30px; flex-shrink:0; width:46px; text-align:center; }
        .mrow .mtx { flex:1; }
        .mrow .mtx .mt { font-weight:800; font-size:15px; line-height:1.15; }
        .mrow .mtx .md { font-size:12.5px; opacity:.82; margin-top:2px; line-height:1.25; }
        .mrow .mv { font-size:26px; font-weight:900; line-height:1; flex-shrink:0; }
        .mrow .bar { position:absolute; left:0; top:0; bottom:0; width:5px; }
        .b-gold { background:var(--gold); } .b-navy { background:var(--navy-l); } .b-green { background:var(--green-l); }

        .levels { display:flex; gap:8px; justify-content:center; margin-top:20px; }
        .lvl { flex:1; text-align:center; background:#fff; border-radius:16px; padding:14px 6px 12px; box-shadow:0 10px 30px rgba(11,45,110,.12); }
        .lvl .bw { width:72px; height:auto; margin:0 auto 6px; display:block; }
        .lvl .ln { font-weight:900; font-size:14px; color:var(--navy); }
        .lvl .lp { font-size:11px; color:#5a6577; font-weight:700; margin-top:1px; }
        .lvl.pulse .bw { animation:bob2 2.4s ease-in-out infinite; }
        @keyframes bob2 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-7px);} }

        .params { display:flex; flex-wrap:wrap; gap:6px; justify-content:center; margin-top:18px; }
        .ppill { background:#fff; color:var(--navy); font-weight:700; font-size:11px; border-radius:999px; padding:6px 11px; box-shadow:0 4px 12px rgba(11,45,110,.1); border-left:4px solid var(--navy-l); display:flex; align-items:center; gap:5px; }
        .ppill b { background:var(--navy); color:#fff; border-radius:50%; width:17px; height:17px; display:inline-grid; place-items:center; font-size:9.5px; }
        .ppill.b { border-left-color:#C77B30; } .ppill.b b { background:#C77B30; }
        .ppill.s { border-left-color:#8b97a6; } .ppill.s b { background:#8b97a6; }
        .ppill.g { border-left-color:#cf9a00; } .ppill.g b { background:#cf9a00; }

        .upgrade { margin-top:18px; background:linear-gradient(135deg,#9b5cc8,#7A5CC8); border-radius:16px; padding:16px; display:flex; align-items:center; gap:13px; box-shadow:0 10px 28px rgba(122,92,200,.35); }
        .upgrade .ue { font-size:30px; flex-shrink:0; }
        .upgrade .ut { font-size:14px; font-weight:700; line-height:1.3; }
        .upgrade .ut b { font-weight:900; }

        .engrow { display:flex; gap:9px; margin-top:22px; }
        .eng { flex:1; background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.22); border-radius:15px; padding:16px 6px; text-align:center; backdrop-filter:blur(6px); }
        .eng .en { font-size:30px; font-weight:900; line-height:1; }
        .eng .eu { font-size:11px; font-weight:800; opacity:.92; margin-top:3px; line-height:1.1; }

        .feature { display:flex; align-items:flex-start; gap:12px; margin-top:15px; }
        .feature .fi { width:42px; height:42px; border-radius:12px; flex-shrink:0; display:grid; place-items:center; font-size:21px; background:rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.2); }
        .feature .ft { font-weight:800; font-size:15px; line-height:1.2; }
        .feature .fd { font-size:12.5px; opacity:.84; margin-top:2px; line-height:1.3; }

        .checkline { display:flex; align-items:center; gap:10px; margin-top:11px; font-size:14px; font-weight:600; }
        .checkline .ck { width:25px; height:25px; border-radius:50%; background:linear-gradient(135deg,var(--green),var(--green-l)); display:grid; place-items:center; font-size:14px; font-weight:900; flex-shrink:0; color:#fff; }

        .ctacard { background:#fff; color:var(--ink); border-radius:22px; padding:22px 18px; box-shadow:0 18px 50px rgba(0,0,0,.3); margin-top:22px; }
        .actions { display:grid; grid-template-columns:1fr 1fr; gap:11px; margin-top:6px; }
        .act { display:flex; align-items:center; justify-content:center; gap:9px; padding:15px 10px; border-radius:14px; font-weight:800; font-size:15px; text-decoration:none; color:#fff; position:relative; overflow:hidden; transition:transform .15s; box-shadow:0 8px 22px rgba(0,0,0,.18); }
        .act:active { transform:scale(.95); }
        .act .ai { font-size:20px; line-height:1; }
        .act.call { background:linear-gradient(135deg,#0a8f3c,#16b85a); }
        .act.wa { background:linear-gradient(135deg,#1ebe5d,#25D366); }
        .act.mail { background:linear-gradient(135deg,#c0392b,#e5453a); }
        .act.web { background:linear-gradient(135deg,#1746A8,#2f7be0); }
        .act.full { grid-column:1 / -1; background:linear-gradient(135deg,var(--saffron),var(--gold)); font-size:17px; animation:ctapulse 2s ease-in-out infinite; }
        @keyframes ctapulse { 0%,100%{box-shadow:0 8px 22px rgba(244,123,32,.4);} 50%{box-shadow:0 12px 34px rgba(244,123,32,.6);} }
        .act.full .num { font-weight:900; }
        .contactline { display:flex; align-items:center; gap:9px; margin-top:13px; font-weight:700; font-size:14.5px; color:var(--navy); justify-content:center; flex-wrap:wrap; }

        .divider { text-align:center; margin-top:20px; font-size:12px; opacity:.6; font-weight:700; letter-spacing:.1em; }
        .foot { text-align:center; padding:22px; font-size:11.5px; opacity:.6; line-height:1.5; }

        .fab { position:fixed; right:16px; bottom:20px; z-index:101; width:58px; height:58px; border-radius:50%; background:var(--wa); display:grid; place-items:center; box-shadow:0 8px 24px rgba(37,211,102,.5); text-decoration:none; animation:fabpulse 2.2s ease-in-out infinite; }
        .fab svg { width:31px; height:31px; }
        @keyframes fabpulse { 0%,100%{transform:scale(1);box-shadow:0 8px 24px rgba(37,211,102,.5);} 50%{transform:scale(1.08);box-shadow:0 12px 32px rgba(37,211,102,.7);} }
        
        /* ===== RESPONSIVE UPGRADE: MOBILE + TABLET + DESKTOP ===== */
        @media (min-width:521px){ .fab{ right:calc(50% - 244px); } }
        
        @media (min-width:700px) and (max-width:899px){
          .wrap { max-width:760px; width:100%; }
          .zed-responsive-root section { padding:56px 34px; }
          .logobar img { height:60px; }
          .qlist { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
          .qlist .qbubble:last-child { grid-column:1 / -1; }
          .reveal-solution { padding:32px 26px; }
          .moneystrip { display:grid; grid-template-columns:1fr; gap:14px; }
          .levels { gap:14px; }
          .params { gap:8px; }
          .ppill { font-size:12px; padding:7px 12px; }
          .engrow { gap:12px; }
          .ctacard { padding:28px 24px; }
          .actions { grid-template-columns:repeat(4,1fr); }
          .act.full { grid-column:1 / -1; }
        }

        @media (min-width:900px){
          .wrap { max-width:none; width:100%; overflow:hidden; }
          .zed-responsive-root section { padding:76px max(52px,calc((100vw - 1220px)/2 + 52px)); }
          .logobar { justify-content:center; margin-bottom:28px; }
          .logobar img { height:66px; padding:10px 20px; border-radius:18px; }
          .kick { font-size:13px; }
          .kick.pill { padding:9px 18px; }
          .zed-responsive-root h1 { font-size:clamp(48px,5vw,76px); line-height:.98; }
          .zed-responsive-root h2 { font-size:clamp(40px,4.2vw,62px); line-height:1; }
          .lead { font-size:clamp(18px,1.4vw,22px); line-height:1.5; }
          .tiny { font-size:13px; }

          /* Screen 1 */
          .zed-responsive-root section:first-of-type { min-height:100vh; display:grid; grid-template-columns:minmax(360px,.8fr) minmax(520px,1.2fr); gap:32px 48px; align-items:center; }
          .zed-responsive-root section:first-of-type .logobar { position:absolute; top:32px; left:max(52px,calc((100vw - 1220px)/2 + 52px)); margin:0; justify-content:flex-start; }
          .zed-responsive-root section:first-of-type .qintro { grid-column:1; align-self:end; text-align:left; margin:0; max-width:520px; padding-top:70px; }
          .zed-responsive-root section:first-of-type .qintro h1 { font-size:clamp(42px,4vw,60px)!important; }
          .zed-responsive-root section:first-of-type .qintro .lead { text-align:left!important; font-size:17px!important; }
          .qlist { grid-column:1; display:grid; grid-template-columns:1fr; gap:12px; margin:0; max-width:520px; align-self:start; }
          .qbubble { padding:14px 16px; border-radius:16px; }
          .qbubble .qe { font-size:26px; width:40px; }
          .qbubble .qt { font-size:15.5px; line-height:1.25; }
          .reveal-solution { grid-column:2; grid-row:2 / span 2; margin:0; align-self:center; padding:54px 48px; border-radius:32px; min-height:430px; display:flex; flex-direction:column; justify-content:center; }
          .reveal-solution .rsbadge { font-size:15px; padding:10px 22px; margin-bottom:20px; }
          .reveal-solution .rsbig { font-size:clamp(58px,5.6vw,86px); line-height:.98; margin-bottom:18px; }
          .reveal-solution .lead { font-size:21px!important; max-width:700px; margin:0 auto; }
          .scrollcue { grid-column:1 / -1; margin-top:8px; }

          /* Screen 2 */
          .zed-responsive-root section:nth-of-type(2) { min-height:100vh; }
          .zed-responsive-root section:nth-of-type(2) > div[style*="textAlign: 'center'"] { max-width:920px; margin:0 auto; text-align:center!important; }
          .zedmark { width:150px; height:150px; margin-bottom:22px; }
          .moneystrip { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; max-width:1220px; margin:34px auto 0; }
          .mrow { min-height:220px; flex-direction:column; text-align:center; justify-content:center; align-items:center; padding:28px 20px; border-radius:22px; }
          .mrow .bar { left:0; right:0; top:0; bottom:auto; width:100%; height:6px; }
          .mrow .mic { font-size:38px; width:auto; }
          .mrow .mtx .mt { font-size:18px; }
          .mrow .mtx .md { font-size:14px; margin-top:5px; }
          .mrow .mv { font-size:38px; margin-top:6px; }
          .zed-responsive-root section:nth-of-type(2) > div[style*="marginTop: '18px'"] { max-width:820px; margin:26px auto 0!important; padding:24px!important; border-radius:22px!important; }
          .levels { max-width:820px; margin:34px auto 0; gap:20px; }
          .lvl { padding:22px 14px 18px; border-radius:22px; }
          .lvl .bw { width:96px; }
          .lvl .ln { font-size:18px; }
          .lvl .lp { font-size:13px; }
          .params { max-width:1120px; margin:28px auto 0; gap:10px; }
          .ppill { font-size:12.5px; padding:8px 13px; }
          .zed-responsive-root section:nth-of-type(2) > .tiny { max-width:900px; margin:18px auto 0!important; font-size:14px!important; }
          .upgrade { max-width:860px; margin:26px auto 0; padding:22px 26px; border-radius:22px; }
          .upgrade .ue { font-size:40px; }
          .upgrade .ut { font-size:17px; }

          /* Screen 3 */
          .zed-responsive-root section:nth-of-type(3) > div[style*="textAlign: 'center'"] { max-width:940px; margin:0 auto; text-align:center!important; }
          .engrow { max-width:940px; margin:36px auto 0; gap:18px; }
          .eng { padding:26px 12px; border-radius:22px; }
          .eng .en { font-size:44px; }
          .eng .eu { font-size:13px; }
          .zed-responsive-root section:nth-of-type(3) > div[style*="marginTop: '8px'"] { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; max-width:1220px; margin:28px auto 0!important; }
          .zed-responsive-root section:nth-of-type(3) > div[style*="marginTop: '8px'"] .feature { margin:0; background:rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.22); border-radius:22px; padding:24px; min-height:148px; }
          .feature .fi { width:52px; height:52px; border-radius:16px; font-size:26px; }
          .feature .ft { font-size:18px; }
          .feature .fd { font-size:14px; line-height:1.42; margin-top:5px; }
          .zed-responsive-root section:nth-of-type(3) > div[style*="marginTop: '20px'"] { max-width:860px; margin:30px auto 0!important; padding:22px 28px!important; border-radius:22px!important; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; }
          .checkline { margin:0; font-size:15px; align-items:flex-start; }
          .zed-responsive-root section:nth-of-type(3) > .tiny { max-width:860px; margin:18px auto 0!important; font-size:13.5px!important; }

          /* Screen 4 */
          .zed-responsive-root section:nth-of-type(4) > div[style*="textAlign: 'center'"] { max-width:860px; margin:0 auto; text-align:center!important; }
          .ctacard { max-width:860px; margin:34px auto 0; padding:34px 32px; border-radius:28px; }
          .actions { grid-template-columns:repeat(4,minmax(0,1fr)); gap:14px; }
          .act { padding:18px 12px; border-radius:18px; font-size:16px; }
          .act.full { grid-column:1 / -1; font-size:20px; }
          .contactline { font-size:15.5px; }
          .divider { margin-top:28px; }
          .foot { padding:30px 22px; font-size:12.5px; }

          .fab { right:28px; bottom:28px; width:64px; height:64px; }
          .fab svg { width:34px; height:34px; }
        }

        @media (min-width:1200px){
          .zed-responsive-root section { padding-top:88px; padding-bottom:88px; }
          .zed-responsive-root section:first-of-type { grid-template-columns:minmax(430px,.85fr) minmax(620px,1.15fr); gap:48px 70px; }
          .qlist { max-width:560px; }
          .reveal-solution { min-height:500px; }
          .actions { grid-template-columns:1fr 1fr 1fr 1fr; }
        }

        @media (min-width:1600px){
          .zed-responsive-root section { padding-left:calc((100vw - 1360px)/2); padding-right:calc((100vw - 1360px)/2); }
          .zed-responsive-root section:first-of-type .logobar { left:calc((100vw - 1360px)/2); }
        }

        @media (prefers-reduced-motion:reduce){
          *,*::before,*::after { animation-duration:.01ms!important; animation-iteration-count:1!important; scroll-behavior:auto!important; transition-duration:.01ms!important; }
        }
      `}} />

      <div className="wrap">
        {/* ============ SCREEN 1 — QUESTIONS → ONE-STOP SOLUTION ============ */}
        <section className="bg-navy">
          <div className="amb g a-tr"></div><div className="amb s a-bl"></div><div className="gridtex"></div>
          <div className="logobar rv">
            <img src={horizontal_logo} alt="Aarti Educare" />
          </div>
          <div className="qintro">
            <span className="kick pill rv">Running an MSME?</span>
            <h1 className="rv d1" style={{ margin: '10px 0 6px', fontSize: 'clamp(26px,7.5vw,38px)' }}>Does this sound like <span className="grad-gold">you?</span></h1>
            <p className="lead rv d1" style={{ fontSize: '15px' }}>Tick the problems you're facing today 👇</p>
          </div>
          <div className="qlist">
            <div className="qbubble rv d1"><span className="qe">🏭</span><span className="qt">Want quality systems but it feels too expensive?</span><span className="qm">❓</span></div>
            <div className="qbubble rv d2"><span className="qe">📋</span><span className="qt">Confused by ZED paperwork &amp; 20 parameters?</span><span className="qm">❓</span></div>
            <div className="qbubble rv d2"><span className="qe">⚙️</span><span className="qt">Need to upgrade machinery but short on funds?</span><span className="qm">❓</span></div>
            <div className="qbubble rv d3"><span className="qe">📉</span><span className="qt">Losing tenders &amp; big buyers to competitors?</span><span className="qm">❓</span></div>
            <div className="qbubble rv d3"><span className="qe">⚡</span><span className="qt">High power bills &amp; too much waste?</span><span className="qm">❓</span></div>
          </div>
          <div className="reveal-solution rv d4 shimmer">
            <span className="rsbadge">✓ One answer to all of it</span>
            <div className="rsbig">ZED is your<br /><span className="onestop">ONE-STOP SOLUTION</span></div>
            <p className="lead" style={{ fontSize: '15px', opacity: 0.95 }}>One certification that fixes all these — and pays you up to <b className="grad-gold">₹5.5 Lakh</b> to do it.</p>
          </div>
          <div className="scrollcue rv d5"><span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.1em' }}>SEE HOW</span><span className="ch"></span></div>
        </section>

        {/* ============ SCREEN 2 — WHAT IS ZED + BENEFITS ============ */}
        <section className="bg-dark">
          <div className="amb g a-tr"></div><div className="amb w a-bl"></div>
          <div style={{ textAlign: 'center' }}>
            <div className="zedmark rv"><div className="ring r1"></div><div className="ring r2"></div><div className="ring r3"></div><div className="core">ZED</div></div>
            <span className="kick pill rv d1">Govt. of India · Ministry of MSME</span>
            <h2 className="rv d2" style={{ margin: '12px 0 8px' }}>Zero Defect, Zero Effect</h2>
            <p className="lead rv d3">A Government certification that proves your quality &amp; green practices — and rewards you with <b className="grad-gold">real money.</b></p>
          </div>
          <div className="moneystrip">
            <div className="mrow rv d1"><div className="bar b-gold"></div><div className="mic">🏭</div><div className="mtx"><div className="mt">Technology Upgradation</div><div className="md">New &amp; cleaner machinery</div></div><div className="mv grad-gold">₹3L</div></div>
            <div className="mrow rv d2"><div className="bar b-navy"></div><div className="mic">🤝</div><div className="mtx"><div className="mt">Handholding &amp; Consultancy</div><div className="md">Expert support — that's us</div></div><div className="mv grad-gold">₹2L</div></div>
            <div className="mrow rv d3"><div className="bar b-green"></div><div className="mic">🧪</div><div className="mtx"><div className="mt">Testing &amp; Certification</div><div className="md">ISO, lab &amp; product testing</div></div><div className="mv grad-gold">₹50K</div></div>
          </div>
          <div className="rv d4" style={{ marginTop: '18px', textAlign: 'center', background: 'rgba(245,183,0,.12)', border: '1px solid rgba(245,183,0,.35)', borderRadius: '16px', padding: '16px' }}>
            <div style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '.1em', opacity: 0.9 }}>⭐ HEADLINE BENEFIT</div>
            <div className="bignum" style={{ fontSize: 'clamp(42px,14vw,66px)', margin: '4px 0' }}>₹3,00,000</div>
            <div style={{ fontSize: '14px', fontWeight: 700 }}>direct subsidy for technology upgradation</div>
          </div>

          {/* levels + params */}
          <div className="levels">
            <div className="lvl pp d1"><ZedBadge metal="bronze" /><div className="ln">BRONZE</div><div className="lp">7 Params</div></div>
            <div className="lvl pp d2"><ZedBadge metal="silver" /><div className="ln">SILVER</div><div className="lp">14 Params</div></div>
            <div className="lvl pp d3 pulse"><ZedBadge metal="gold" /><div className="ln">GOLD</div><div className="lp">20 Params</div></div>
          </div>
          <div className="params rv d4">
            <span className="ppill b"><b>1</b>Leadership</span><span className="ppill b"><b>2</b>Swachh</span><span className="ppill b"><b>3</b>Safety</span>
            <span className="ppill b"><b>4</b>Delivery</span><span className="ppill b"><b>5</b>Quality</span><span className="ppill b"><b>6</b>Energy</span><span className="ppill b"><b>7</b>Measurement</span>
            <span className="ppill s"><b>8</b>HR</span><span className="ppill s"><b>9</b>Daily Works</span><span className="ppill s"><b>10</b>Maintenance</span>
            <span className="ppill s"><b>11</b>Process</span><span className="ppill s"><b>12</b>Testing</span><span className="ppill s"><b>13</b>Material</span><span className="ppill s"><b>14</b>Environment</span>
            <span className="ppill g"><b>15</b>Supply Chain</span><span className="ppill g"><b>16</b>Risk</span><span className="ppill g"><b>17</b>Waste</span>
            <span className="ppill g"><b>18</b>Tech</span><span className="ppill g"><b>19</b>Resources</span><span className="ppill g"><b>20</b>CSR</span>
          </div>
          <p className="tiny rv d5" style={{ textAlign: 'center', marginTop: '14px' }}>Cost is <b style={{ color: '#fff' }}>80% subsidised for Micro</b> · 60% Small · 50% Medium · <b style={{ color: '#fff' }}>FREE for women-owned</b> · 🎁 ₹10,000 reward on pledge · valid 3 years.</p>

          {/* upgrade existing certificate */}
          <div className="upgrade rv d5">
            <span className="ue">🏅</span>
            <div className="ut"><b>Already hold a ZED certificate?</b> We help you <b>upgrade</b> — Bronze → Silver → Gold — to unlock bigger benefits.</div>
          </div>
        </section>

        {/* ============ SCREEN 3 — WHY AARTI EDUCARE ============ */}
        <section className="bg-saffron">
          <div className="amb w a-tr"></div><div className="gridtex"></div>
          <div style={{ textAlign: 'center' }}>
            <span className="kick pill rv">⭐ Why Aarti Educare</span>
            <h2 className="rv d1" style={{ marginTop: '10px' }}>We build the systems.<br />You get certified.</h2>
            <p className="lead rv d2" style={{ marginTop: '8px' }}>Our experienced consultants work hands-on at your unit for <b>3–4 months</b> across all 20 parameters — you don't touch the paperwork.</p>
          </div>
          <div className="engrow">
            <div className="eng pp d1"><div className="en">14</div><div className="eu">Full-Day Visits</div></div>
            <div className="eng pp d2"><div className="en">8<span style={{ fontSize: '.5em' }}>hr+</span></div><div className="eu">Each Visit</div></div>
            <div className="eng pp d3"><div className="en">3–4</div><div className="eu">Months</div></div>
            <div className="eng pp d4"><div className="en">20</div><div className="eu">Parameters</div></div>
          </div>
          <div style={{ marginTop: '8px' }}>
            <div className="feature rv d1"><div className="fi">🏗️</div><div><div className="ft">Real systems built</div><div className="fd">SOPs, registers, audits &amp; RCA/CAPA — live on your floor.</div></div></div>
            <div className="feature rv d2"><div className="fi">💰</div><div><div className="ft">Every rupee claimed</div><div className="fd">We make sure the full ₹3L + ₹2L + ₹50K reaches you.</div></div></div>
            <div className="feature rv d3"><div className="fi">🏆</div><div><div className="ft">Aim for Gold</div><div className="fd">Proper scoring &amp; evidence — not stuck at Bronze.</div></div></div>
          </div>
          <div className="rv d3" style={{ marginTop: '20px', background: 'rgba(255,255,255,.16)', borderRadius: '16px', padding: '16px' }}>
            <div className="checkline"><span className="ck">✓</span><span>Registered on Udyam portal</span></div>
            <div className="checkline"><span className="ck">✓</span><span>Micro, Small or Medium unit</span></div>
            <div className="checkline"><span className="ck">✓</span><span>Valid GST &amp; PAN — you likely qualify</span></div>
          </div>
          <p className="tiny rv d4" style={{ textAlign: 'center', marginTop: '14px', color: '#fff', opacity: 0.92 }}>⚠️ ZED registration is 100% FREE &amp; paperless. Beware of fake agents — we are an authorised ZED consultant organisation.</p>
        </section>

        {/* ============ SCREEN 4 — CONTACT ============ */}
        <section className="bg-navy" id="contact">
          <div className="amb g a-tr"></div><div className="amb s a-bl"></div><div className="gridtex"></div>
          <div className="logobar rv"><img src={horizontal_logo} alt="Aarti Educare" /></div>
          <div style={{ textAlign: 'center' }}>
            <span className="kick pill rv d1">Let's claim your ₹5.5 Lakh</span>
            <h2 className="rv d2" style={{ marginTop: '12px' }}>Start your ZED<br />journey <span className="grad-gold">today</span></h2>
            <p className="lead rv d3" style={{ marginTop: '10px' }}>Aarti Educare Pvt. Ltd. — your ZED handholding &amp; consultancy partner. We register, build, train &amp; certify.</p>
          </div>
          <div className="ctacard rv d3">
            <div style={{ textAlign: 'center', fontWeight: 900, color: 'var(--navy)', fontSize: '18px', marginBottom: '4px' }}>📞 Talk to us now</div>
            <div style={{ textAlign: 'center', fontSize: '13px', color: '#5a6577', fontWeight: 700, marginBottom: '14px' }}>Free consultation — tap any button</div>
            <div className="actions">
              <a className="act call" href="tel:+919881214707"><span className="ai">📞</span> Call</a>
              <a className="act wa" href="https://wa.me/919881214707?text=Hi%2C%20I%27m%20interested%20in%20ZED%20Certification%20%26%20handholding%20support." target="_blank" rel="noopener noreferrer"><span className="ai">💬</span> WhatsApp</a>
              <a className="act mail" href="mailto:aartieducare@gmail.com?subject=ZED%20Certification%20Enquiry"><span className="ai">✉️</span> Email</a>
              <a className="act web" href="https://www.aartieducare.com" target="_blank" rel="noopener noreferrer"><span className="ai">🌐</span> Website</a>
              <a className="act full" href="tel:+919881214707"><span className="ai">📲</span> <span className="num">+91 98812 14707</span></a>
            </div>
            <div className="contactline"><span>✉️ aartieducare@gmail.com</span></div>
            <div className="contactline" style={{ marginTop: '4px' }}><span>🌐 www.aartieducare.com</span></div>
          </div>
          <div className="divider rv d4">⭐ ZERO DEFECT · ZERO EFFECT ⭐</div>
        </section>

        <div className="foot">
          Aarti Educare Private Limited<br />
          Authorised ZED Consultant Organisation
        </div>
      </div>

      {/* floating whatsapp (only bottom element) */}
      <a className="fab" href="https://wa.me/919881214707?text=Hi%2C%20I%27m%20interested%20in%20ZED%20Certification." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" fill="#fff"><path d="M16 .4C7.4.4.5 7.3.5 15.9c0 2.8.7 5.4 2 7.8L.4 31.6l8.1-2.1c2.3 1.3 4.9 1.9 7.5 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.4 16 .4zm0 28.3c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.2 5.9-13.1 13.1-13.1S29.1 8.7 29.1 16 23.2 28.7 16 28.7zm7.2-9.8c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 3.9 1.7 4.2c.2.3 2.9 4.4 7 6.2 1 .4 1.7.7 2.3.9 1 .3 1.8.3 2.5.2.8-.1 2.3-.9 2.6-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.7-.5z"/></svg>
      </a>
    </div>
  );
};

export default ZedLanding;