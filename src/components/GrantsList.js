export const GrantsList = ({ data }) => {
  if (!data.length) {
    return <p>There are no grants for this charity</p>;
  }
  return (
    <>
      <p className="data-item-title">Grants:</p>
      <ul className="grants-list">
        {data.map((grant, index) => (
          <li
            className="grants-list-item"
            key={`${grant.title}-${grant.amountAwarded}-${index}`}
          >
            {grant.title} - {grant.amountAwarded}
          </li>
        ))}
      </ul>
    </>
  );
};
