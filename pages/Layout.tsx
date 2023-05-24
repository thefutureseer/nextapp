import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>Copy rights</p>
      </footer>
    </div>
  );
};

export default Layout;


// import Head from 'next/head';
// import Link from 'next/link';
// //Next has all google fonts build in 
// import {Inter} from 'next/font/google';
// // import '../styles/Home.module.css';
// // import '../styles/globals.css'; // Import the global CSS file

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Create Next App'
// }

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <Head>
//         <title>Todo App</title>
//         <meta name="description" content="A simple Todo app" />
//       </Head>

// {/* add tailwind */}
//       <body className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}>
//         <header>
//           <nav>
//             <ul>
//               <li>
//                 <Link href="/">
//                   <a>Home</a>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about">
//                   <a>About</a>
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </header>

//         <main>{children}</main>

//         <footer>
//           <p>Footer content here</p>
//         </footer>
//       </body>
//     </html>
//   );
// };