import SectionBlock from './SectionBlock';
import profileImage from '../assets/profile.jpg';
import HeroImage from './HeroImage';

export default function ContentPane() {
  return (
    <div>
      <SectionBlock>
        <p>The standard Lorem Ipsum passage...</p>
      </SectionBlock>

      <SectionBlock height="60%">
        <HeroImage image={profileImage} alt="Ryn Singleton"/>
      </SectionBlock>

      <SectionBlock>
        <p>The standard Lorem Ipsum passage...</p>
      </SectionBlock>
    </div>
  );
}