import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'nph3sws1',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skUGOjSVbRLLJpiFOXk5TrZZ04u7TKh6QlY8zj7NYrKuNjBgWMQx4F1ftmXSeidqlvM59ODHpdRpqwJbQOOS5lDRKijKF04VsJh8phq1y65YsAYoxOO1SNpE9O7Kjei8RxD5al8FcrT3j63vEfbO8t46pqYR9wSJKwfeTf2StSJf5bZ3Sqcn',
  useCdn: false,
})
