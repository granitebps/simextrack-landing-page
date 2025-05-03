export default function CriticalStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS for above-the-fold content */
          :root {
            --background: 0 0% 100%;
            --foreground: 222.2 84% 4.9%;
            --primary: 142.1 76.2% 36.3%;
            --primary-foreground: 355.7 100% 97.3%;
          }
          
          .dark {
            --background: 222.2 84% 4.9%;
            --foreground: 210 40% 98%;
            --primary: 142.1 70.6% 45.3%;
            --primary-foreground: 144.9 80.4% 10%;
          }
          
          body {
            margin: 0;
            padding: 0;
            font-family: var(--font-inter), system-ui, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Critical header styles */
          header {
            position: sticky;
            top: 0;
            z-index: 50;
            width: 100%;
            border-bottom-width: 1px;
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(4px);
          }
          
          .dark header {
            background-color: rgba(10, 10, 10, 0.95);
          }
          
          /* Critical hero section styles */
          .hero-section {
            width: 100%;
            padding-top: 3rem;
            padding-bottom: 3rem;
            background: linear-gradient(to bottom, rgba(144, 252, 249, 0.1), rgba(255, 255, 255, 1));
          }
          
          .dark .hero-section {
            background: linear-gradient(to bottom, rgba(25, 123, 189, 0.2), rgba(10, 10, 10, 1));
          }
          
          @media (min-width: 768px) {
            .hero-section {
              padding-top: 6rem;
              padding-bottom: 6rem;
            }
          }
          
          @media (min-width: 1024px) {
            .hero-section {
              padding-top: 8rem;
              padding-bottom: 8rem;
            }
          }
          
          /* Container styles */
          .container {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          
          @media (min-width: 640px) {
            .container {
              max-width: 640px;
            }
          }
          
          @media (min-width: 768px) {
            .container {
              max-width: 768px;
              padding-left: 2.5rem;
              padding-right: 2.5rem;
            }
          }
          
          @media (min-width: 1024px) {
            .container {
              max-width: 1024px;
              padding-left: 4rem;
              padding-right: 4rem;
            }
          }
          
          @media (min-width: 1280px) {
            .container {
              max-width: 1280px;
            }
          }
          
          /* Critical button styles */
          .btn {
            display: inline-flex;
            height: 2.5rem;
            align-items: center;
            justify-content: center;
            border-radius: 0.375rem;
            padding-left: 1rem;
            padding-right: 1rem;
            font-size: 0.875rem;
            font-weight: 500;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
          }
          
          .btn-primary {
            background-color: hsl(var(--primary));
            color: hsl(var(--primary-foreground));
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          }
          
          .btn-primary:hover {
            background-color: hsl(var(--primary) / 0.9);
            transform: scale(1.05);
          }
          
          /* Content visibility for below-the-fold content */
          .content-visibility-auto {
            content-visibility: auto;
          }
        `,
      }}
    />
  )
}
