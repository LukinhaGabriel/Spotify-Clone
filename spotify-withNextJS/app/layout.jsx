import '../src/style/global.css';
import '../src/style/media-queries.css';

// import { metadata } from 'next';

export const metadata = {
    title: "Spotify - Clone",
    description: 'Site construído no evento Imersão Front-end da Alura',
  };

export default function RootLayout({ children, }){
    return(
        <html lang="pt-BR">
            <head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="icon" href="/favicon.png" type="image/png" sizes="any"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/solid.css" integrity="sha384-Tv5i09RULyHKMwX0E8wJUqSOaXlyu3SQxORObAI08iUwIalMmN5L6AvlPX2LMoSE" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossOrigin="anonymous" />
            </head>
            <body>{children}</body>
        </html>
    )
}