import CompanyRow from "../CompanyRow/CompanyRow";

function CompanyTable({ companies }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Industry</th>
          <th>Location</th>
          <th>Package</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {companies.map((company) => (
          <CompanyRow
            key={company._id}
            company={company}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CompanyTable;