import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import ApproachContent from '@/components/ApproachContent';

export const metadata = {
  title: 'Our Approach — S-1 Ventures',
  description: 'How S-1 diagnoses, builds, and operates GTM systems for venture-backed software companies.',
};

export default function ApproachPage() {
  return (
    <>
      <NavBar />
      <ApproachContent />
      <FooterSection />
    </>
  );
}
