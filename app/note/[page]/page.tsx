import Navbar from '../../component/navbar';
import BottomBar from '../../component/bottom';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import './note.css';
import { JetBrains_Mono } from 'next/font/google';


const jetBrainsMonoFont = JetBrains_Mono({
    subsets: ['latin']
});

interface NotePageProps {
    params: {
        page: string;
    }
}

export async function generateStaticParams(){
    const notesDirectory = path.join(process.cwd(), "_notes")
    const filenames = fs.readdirSync(notesDirectory)

    return filenames.map((filename) => ({
        filename: filename.replace(/\.mdx$/, '')
    }))
}



export default function NoteBlog({ params }: NotePageProps){
    const { page } = params;
    const notesDir = path.join(process.cwd(), "_notes");
    const filePath = path.join(notesDir, `${page}.mdx`);
    

    if(!fs.existsSync(filePath)){
        console.log("aha");
        notFound();
    }
    const MDXContent = dynamic(() => import(`../../../_notes/${page}.mdx`).catch(() => {
        console.log("aha");
        notFound();
    }));


    return <main className='container py-0'>
    <Navbar title={"/blog/post"}/>
    <div className='my-2 note stage '>
        <div className="card">
            <div className="card-body">
                <div className="note stage">
                    <MDXContent />
                </div>
            </div>
        </div>
    </div>
    <BottomBar/>
  </main>
  }