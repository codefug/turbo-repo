type SectionProps = {
  heading: string;
  content: string;
};

function Section({ heading, content }: SectionProps) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  );
}
export default Section;
