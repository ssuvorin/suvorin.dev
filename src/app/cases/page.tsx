import { cases } from '../../../content/cases';
import AllCasesGrid from '../../components/AllCasesGrid';

export default function AllCasesPage() {
  // Сортируем по году, новые сверху
  const sortedCases = [...cases].sort((a, b) => b.year - a.year);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto">
        <AllCasesGrid cases={sortedCases} />
      </div>
    </section>
  );
}
