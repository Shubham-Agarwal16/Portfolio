const projects = [
  {
    title: 'Feedback Collection System',
    details: (
      <>
        <ul>
          <li>
            Allows product managers or startup owners to easily send bulk emails to a large group of
            people to gather consumer input or feedback.
          </li>
          <li>
            Implemented authentication using Google OAuth and payment services using Stripe API to
            let owners sign in and purchase credits for creating a campaign.
          </li>
          <li>
            Sends emails using Sendgrid API to the list of surveyees and tabulate all the feedback
            received inside MongoDB.
          </li>
          <li>Owners can see the report of all the survey responses and improve their product.</li>
        </ul>
        <p>Tech stack: React, Node.js, Express, MongoDB</p>
      </>
    )
  },
  {
    title: 'Job Tracker',
    details: (
      <>
        <ul>
          <li>
            It is a web app that allows job seekers to access opportunities and also track their
            progress easily and is the recruiter's one-stop solution for finding the top talents for
            their company.
          </li>
          <li>
            Implemented authentication using Bcrypt library for both job seekers and recruiters.
          </li>
          <li>
            Job seekers can view the number of jobs categorized on the basis of job status and the
            graphical representation of the same using Recharts library.
          </li>
          <li>Creates, Deletes, Updates job details.| CRUD Ops</li>
        </ul>
        <p>Tech stack: React, Node.js, Express, MongoDB</p>
      </>
    )
  }
];

export function Projects() {
  return (
    <ul>
      {projects.map(({ title, details }) => (
        <li
          key={title}
          className="pb-2 pl-0 mb-4 border-b dark:border-warmGray-900 border-warmGray-200 before:contents">
          <section>
            <h3 className="m-0 text-base font-normal">{title}</h3>
            <div>
              <p className="mt-4 text-sm">{details}</p>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
}
