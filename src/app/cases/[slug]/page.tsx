import { notFound } from 'next/navigation';
import { readFileSync, existsSync } from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import CaseAnimatedContent from '../../../components/CaseAnimatedContent';
import { getCaseBySlug } from '../../../../content/cases';
import CaseMdxAnimatedBlock from '../../../components/CaseMdxAnimatedBlock';

interface CasePageProps {
  params: { slug: string };
}

export default async function CasePage({ params }: CasePageProps) {
  const caseData = getCaseBySlug(params.slug);
  if (!caseData) return notFound();

  // Load MDX content if exists
  let mdxContent: string | null = null;
  const mdxPath = path.join(process.cwd(), 'content/cases', `${params.slug}.mdx`);
  if (existsSync(mdxPath)) {
    const file = readFileSync(mdxPath, 'utf-8');
    const { content } = matter(file); // <-- только контент без frontmatter
    mdxContent = content;
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal min-h-screen">
      <div className="max-w-4xl mx-auto">
        <CaseAnimatedContent caseData={caseData} />
        {caseData.externalUrl && (
          <div className="flex gap-4 mb-8">
            <Link
              href={caseData.externalUrl}
              className="btn-secondary flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project on external site"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7L7 17M17 7h-6m6 0v6" /></svg>
            </Link>
          </div>
        )}
        {/* MDX content (optional, for full case study) */}
        {mdxContent && <CaseMdxAnimatedBlock mdxContent={mdxContent} />}
        {/* Extra links placeholder */}
        {/* нижний блок с кнопкой удалён */}
      </div>
    </section>
  );
}
