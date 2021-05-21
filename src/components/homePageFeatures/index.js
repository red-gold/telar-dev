import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Kubernetes',
    src: 'https://miro.medium.com/max/3600/1*afkK1deEdJkuN3IhnzuzKg.png',
    description: (
      <>
        High Availability.Reducing resource costs.Ease-of-use and portability.Scalability and modularity.
      </>
    ),
  },
  {
    title: 'High performance with Golang',
    src: 'https://blog.golang.org/lib/godoc/images/go-logo-blue.svg',
    description: (
      <>
        Microservices are wtitten in Golang to have concurrency, simplicity and consistency for higher performance.
      </>
    ),
  },
  {
    title: 'Microservice Architecture',
    src: 'https://miro.medium.com/max/300/1*uOLtvuo9wxHXyETP_c085A.png',
    description: (
      <>
        Easier to build and maintain, organized around business capabilities, improved productivity and speed, flexibility in using technologies and scalability, team flexibility based on small groups.
      </>
    ),
  },
  {
    title: 'Artificial intelligence',
    src: '/img/ai.svg',
    description: (
      <>
        Smart solution at enterprise scale based on AI/ML technologies.
      </>
    ),
  },
  
  
  {
    title: 'Running anywhere',
    src: 'https://cdn3.iconfinder.com/data/icons/message-and-communication-sets/50/Icon_Cloud-512.png',
    description: (
      <>
        Run your social network  anywhere on private/public cloud.
      </>
    ),
  },
  {
    title: 'OpenFaaS Framework',
    src: 'https://www.katacoda.com/javajon/courses/kubernetes-serverless/openfaas/assets/openfaas.png',
    description: (
      <>
        Avoid lock-in through the use of Docker. Run on any public or private cloud.Build both microservices & functions in any language. Legacy code and binaries.Auto-scale for demand or to zero when idle.
      </>
    ),
  },
  {
    title: 'Sync in real-time',
    src: '/img/sync.svg',
    description: (
      <>
        Enable real time data transfering for fast interaction between frontend and backend.
      </>
    ),
  },
  {
    title: 'ReactJS',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    description: (
      <>
        Building modern web app. It facilitates the overall process of writing components. It boosts productivity and facilitates further maintenance.It ensures faster rendering .It guarantees stable code.
      </>
    ),
  },
  
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
