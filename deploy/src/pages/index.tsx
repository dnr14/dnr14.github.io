import React, { useRef } from 'react';
import withLayout from 'hoc/withLayout';
import Top from 'components/Top/Top';
import About from 'components/About/About';
import useScrollTop from 'hooks/useScrollTop';
import Skills from 'components/Skills/Skills';
import Archiving from 'components/Archiving/Archiving';
import Projects from 'components/Projects/Projects';
import Header from 'components/Common/Header';

const IndexPage = () => {
  const topRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const archivingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const { handleScrollMove } = useScrollTop();

  const handleTopFocuse = (type: Types) => () => {
    if (type === 'top') {
      const { current } = topRef;
      if (!current) return;
      handleScrollMove(current.offsetHeight);
    }
    if (type === 'about') {
      const { current } = aboutRef;
      if (!current) return;
      handleScrollMove(current.offsetTop - 72);
    }

    if (type === 'skills') {
      const { current } = skillsRef;
      if (!current) return;
      handleScrollMove(current.offsetTop - 72);
    }
    if (type === 'archiving') {
      const { current } = archivingRef;
      if (!current) return;
      handleScrollMove(current.offsetTop - 72);
    }
    if (type === 'projects') {
      const { current } = projectsRef;
      if (!current) return;
      handleScrollMove(current.offsetTop - 72);
    }
  };

  return (
    <>
      <Header handleTopFocuse={handleTopFocuse} />
      <main>
        <Top ref={topRef} handleTopFocuse={handleTopFocuse('top')} />
        <About ref={aboutRef} handleTopFocuse={handleTopFocuse('about')} />
        <Skills ref={skillsRef} handleTopFocuse={handleTopFocuse('skills')} />
        <Archiving
          ref={archivingRef}
          handleTopFocuse={handleTopFocuse('archiving')}
        />
        <Projects
          ref={projectsRef}
          handleTopFocuse={handleTopFocuse('projects')}
        />
      </main>
    </>
  );
};

export default withLayout(IndexPage);
