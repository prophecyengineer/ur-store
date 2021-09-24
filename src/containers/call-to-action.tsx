import CTABlock from 'components/cta-block';
import Button from 'components/button';
import ArrowRight from 'assets/icons/arrow-right';
import CTAImage from 'assets/image/8bit2.gif';

export default function CallToAction() {
  return (
    <CTABlock background={CTAImage} >
      <h3 className="font-normal text-white text-36px mb-6 text-center lg:text-left">
        want a store? here's one 
        <br />
      
        <span className="font-bold">Your collection, your store. totally free</span>
      </h3>

     

      <Button variant="elevation">
        <span className="mr-2">i wanna make one</span> <ArrowRight width="13px" />
      </Button>
    </CTABlock>
  );
}
