import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Kubernetes",
    src: "https://miro.medium.com/max/3600/1*afkK1deEdJkuN3IhnzuzKg.png",
    description: (
      <>
        Achieve high availability and reduce resource costs with Kubernetes. Its
        ease-of-use and portability ensure seamless scalability and modularity
        for your applications.
      </>
    ),
  },
  {
    title: "High Performance with Golang",
    src: "https://www.cdnlogo.com/logos/g/35/golang.svg",
    description: (
      <>
        Experience unmatched concurrency, simplicity, and consistency.
        Golang-powered microservices boost performance, ensuring your systems
        run faster and more efficiently.
      </>
    ),
  },
  {
    title: "Microservice Architecture",
    src: "https://miro.medium.com/max/300/1*uOLtvuo9wxHXyETP_c085A.png",
    description: (
      <>
        Build and maintain applications with ease. Our microservice architecture
        enhances productivity, speeds up development, and offers the flexibility
        to use varied technologies and scale effortlessly.
      </>
    ),
  },
  {
    title: "Artificial Intelligence",
    src: "/img/ai.svg",
    description: (
      <>
        Implement smart solutions at an enterprise scale with advanced AI and ML
        technologies, transforming the way you do business.
      </>
    ),
  },
  {
    title: "Run Anywhere",
    src: "https://cdn3.iconfinder.com/data/icons/message-and-communication-sets/50/Icon_Cloud-512.png",
    description: (
      <>
        Deploy your social network on any cloud platform, be it private or
        public, for maximum flexibility and reach.
      </>
    ),
  },
  {
    title: "Real-Time Sync",
    src: "/img/sync.svg",
    description: (
      <>
        Enable real-time data transfer for seamless and fast interaction between
        your frontend and backend, enhancing user experience and operational
        efficiency.
      </>
    ),
  },
  {
    title: "ReactJS",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    description: (
      <>
        Build modern web apps with ReactJS. Enjoy an optimized development
        process, increased productivity, easy maintenance, faster rendering, and
        stable code for robust applications.
      </>
    ),
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
