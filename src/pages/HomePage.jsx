import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards';
import JobListing from '../components/JobListing'
import ViewAllJobs from '../components/ViewAllJobs'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <JobListing isHome={true}/>
      <HomeCards/>
      <ViewAllJobs/>
    </>
  )
}

export default HomePage