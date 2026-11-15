import { Component, OnDestroy, OnInit, signal, inject, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <div class="shell">
    <div class="status-line" aria-hidden="true"></div>
    <iframe class="experience" title="EduOrbit 7.0 management workspace"
      src="prototype/index.html" #experience (load)="onExperienceLoaded()"></iframe>
    @if (isLoading()) {
      <section class="splash" aria-label="VamsiTech Magicals starting EduOrbit">
        <div class="splash-decoration orb-1"></div><div class="splash-decoration orb-2"></div>
        <div class="splash-main">
          <div class="logo"><svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M32 6v52M6 32h52M13.6 13.6l36.8 36.8M50.4 13.6 13.6 50.4" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg></div>
          <div class="eyebrow">PRESENTING</div>
          <h1>VamsiTech <span>Magicals</span></h1>
          <div class="rule"></div>
          <p>EduOrbit 7.0 <span class="dot">•</span> Campus Management</p>
          <div class="progress"><div class="bar"></div></div>
          <div class="loading-label">Preparing your workspace...</div>
        </div>
        <div class="bottom">POWERED BY <strong>VAMSITECH TALKS</strong></div>
      </section>
    }
    <div class="angular-route-state" aria-hidden="true"><router-outlet></router-outlet></div>
  </div>
  `,
  styles: [`
    :host,.shell{display:block;width:100%;height:100%;height:100dvh;overflow:hidden}
    .shell{position:relative;background:#f7faf8}.angular-route-state{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.status-line{pointer-events:none;position:absolute;left:0;right:0;top:0;height:env(safe-area-inset-top);background:#102f34;z-index:2}
    .experience{display:block;position:absolute;inset:0;width:100%;height:100%;border:0;background:#f7faf8;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}
    .splash{position:fixed;inset:0;z-index:100;display:grid;place-items:center;color:#f7fff9;background:radial-gradient(circle at 75% 20%,#1c5350 0%,#102f34 43%,#0d2630 100%);overflow:hidden}
    .splash-main{position:relative;display:flex;flex-direction:column;align-items:center;max-width:90vw;text-align:center;animation:fadeup .7s both}
    .logo{width:86px;height:86px;border-radius:26px;display:grid;place-items:center;background:#0e8b7d;color:#deffe9;box-shadow:0 24px 70px #0005, inset 0 1px #ffffff55;margin-bottom:37px;animation:glow 2s ease-in-out infinite alternate}
    .logo svg{width:53px;height:53px}.eyebrow{letter-spacing:5px;color:#a0d9c3;font-weight:700;font-size:11px;margin-bottom:8px}
    h1{font-family:Manrope,sans-serif;font-size:clamp(35px,6vw,61px);line-height:1.1;letter-spacing:-2.4px;margin:0;font-weight:800}h1 span{color:#a7edca}
    .rule{width:56px;height:3px;background:#80d3af;border-radius:5px;margin:22px 0 10px}
    p{font-size:14px;color:#c6dcd7;letter-spacing:1px}.dot{margin:0 6px;color:#8bd6b6}
    .progress{height:4px;max-width:250px;width:65vw;border-radius:20px;background:#ffffff2b;overflow:hidden;margin-top:24px}
    .bar{height:100%;width:45%;border-radius:20px;background:#a7edca;animation:advance 1.7s ease-in-out infinite}
    .loading-label{color:#91b7af;font-size:11px;letter-spacing:1.4px;margin-top:14px;text-transform:uppercase}
    .bottom{position:absolute;bottom:max(29px,env(safe-area-inset-bottom));font-size:10px;letter-spacing:2px;color:#72978e}.bottom strong{color:#abd9bf}
    .splash-decoration{position:absolute;border:1px solid #ffffff10;border-radius:50%;pointer-events:none}.orb-1{width:660px;height:660px;right:-300px;top:-370px}.orb-2{width:500px;height:500px;left:-300px;bottom:-220px}
    @keyframes advance{0%{transform:translateX(-110%)}100%{transform:translateX(310%)}}
    @keyframes glow{from{box-shadow:0 20px 60px #0005, 0 0 0 0 #a7edca08}to{box-shadow:0 20px 60px #0005, 0 0 0 13px #a7edca10}}
    @keyframes fadeup{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
    @media (max-width:640px){.logo{width:74px;height:74px;border-radius:22px;margin-bottom:28px}.logo svg{width:42px}.splash .eyebrow{font-size:10px}p{font-size:12px}}
    @media (prefers-reduced-motion:reduce){.logo,.bar,.splash-main{animation:none}}
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('experience') experience?: ElementRef<HTMLIFrameElement>;
  private readonly router = inject(Router);
  @HostListener('window:message', ['$event']) onPrototypeMessage(event: MessageEvent): void {
    if(event.origin !== location.origin || event.data?.source !== 'eduorbit-v7') return;
    if(event.data.type === 'page' && typeof event.data.route === 'string') {
      const route = '/' + event.data.route;
      if(this.router.url !== route) void this.router.navigateByUrl(route);
    }
    if(event.data.type === 'ready') this.sendRoute();
  }
  private sendRoute(): void {
    this.experience?.nativeElement.contentWindow?.postMessage({source:'eduorbit-angular',type:'route',route:this.router.url.split('/')[1]||'home'},location.origin);
  }
  readonly isLoading = signal(true);
  private loaded = false;
  private minDisplayElapsed = false;
  private minTimer: ReturnType<typeof setTimeout> | undefined;
  private fallbackTimer: ReturnType<typeof setTimeout> | undefined;

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.sendRoute());
    this.minTimer = setTimeout(() => { this.minDisplayElapsed = true; this.finishLoading(); }, 1600);
    this.fallbackTimer = setTimeout(() => { this.isLoading.set(false); }, 9000);
  }
  onExperienceLoaded(): void { this.loaded = true; this.finishLoading(); this.sendRoute(); }
  private finishLoading(): void {
    if (this.loaded && this.minDisplayElapsed) {
      this.isLoading.set(false);
      if (this.fallbackTimer) clearTimeout(this.fallbackTimer);
    }
  }
  ngOnDestroy(): void {
    if (this.minTimer) clearTimeout(this.minTimer);
    if (this.fallbackTimer) clearTimeout(this.fallbackTimer);
  }
}
