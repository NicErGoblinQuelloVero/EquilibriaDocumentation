import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Private',
    Svg: require('@site/static/img/xeqLogo.svg').default,
    description: (
      <>
        quilibria, a privacy-focused cryptocurrency stemming from the Monero fork, places significant emphasis on private and untraceable transactions,
         ensuring an elevated level of confidentiality and security within the dynamic landscape of digital currencies for user protection and financial privacy.
      </>
    ),
  },
  {
    title: 'Decentralized',
    Svg: require('@site/static/img/xeqLogo.svg').default,
    description: (
      <>
        Equilibria employs a sophisticated hybrid Proof of Work (PoW) and Proof of Stake (PoS) consensus algorithm, 
        a groundbreaking approach that not only validates transactions but also governs the Oracle Nodes, 
        solidifying its status as an innovative and versatile blockchain platform at the forefront of the cryptocurrency landscape.
      </>
    ),
  },
  {
    title: 'Versatile',
    Svg: require('@site/static/img/xeqLogo.svg').default,
    description: (
      <>
        Equilibria's oracle system stands out with remarkable chain-agnostic capabilities,
         showcasing its versatility through comprehensive solutions in decentralized finance (DeFi). 
         Simultaneously, it ensures an added layer of privacy for ERC-20 tokens, further enhancing its position in the evolving
          cryptocurrency ecosystem
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h1">{title}</Heading>
        <p>{description}</p>
      </div>
      
    </div>
  );
}


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      
    </section>
  );
}
