import Link from 'next/link';

import { a11yDate, visibleDate } from '@/utils/date';

const experience = [
  {
    company: 'GoWide Solutions',
    position: 'Software Engineer Intern',
    startDate: 'January, 2022',
    endDate: 'April, 2022',
    details: (
      <>
        <ul>
          <li>
            Developed the application's Admin Panel. It allows administration to manage users and
            their profiles.
          </li>
          <li>
            Integrated the custom APIs provided by the organization to implement Authentication for
            the Admin Panel.
          </li>
          <li>
            Created the various screens of the Panel (Dashboard, Category, Manage Account, etc.)
            using HTML and CSS .
          </li>
          <li>
            Developed the ER Diagram and SRS document to document the requirements of the software.
          </li>
        </ul>
        <p>Tech stack: React, Postman, GIT, CSS</p>
      </>
    )
  }
];

export function Experience() {
  return (
    <ul>
      {experience.map(({ company, details, endDate, position, startDate }) => (
        <li
          key={company}
          className="pb-2 pl-0 mb-4 border-b dark:border-warmGray-900 border-warmGray-200 before:contents">
          <section>
            <h3 className="m-0 text-base font-normal">{position}</h3>
            <div>
              <div className="flex justify-between text-sm text-warmGray-600 dark:text-warmGray-400 ">
                <div>{company}</div>
                <div>
                  <time dateTime={a11yDate(startDate)}>{visibleDate(startDate)}</time>
                  {' - '}
                  <time dateTime={a11yDate(endDate)}>{visibleDate(endDate)}</time>
                </div>
              </div>
              <p className="mt-4 text-sm">{details}</p>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
}
