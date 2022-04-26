import { useGetCharities } from "../hooks/useGetCharities";
import { GrantsList } from "./GrantsList";

const DataItem = ({ title, value }) => {
  return (
    <p>
      <span className="data-item-title">{title}: </span>
      <span className="data-item-value">{value}</span>
    </p>
  );
};

export const CharitiesList = () => {
  const { loading, error, data } = useGetCharities();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="charity-list">
      {data.map((charity) => {
        return (
          <div className="charity-list-item" key={charity.contact.name}>
            <h2 className="charity-title">{charity.contact.name}</h2>
            {charity.logo && (
              <img
                className="charity-logo"
                src={charity.logo}
                alt={charity.contact.name + "-logo"}
              />
            )}
            <DataItem title={"Address"} value={charity.contact.address} />
            <DataItem title={"Email"} value={charity.contact.email} />
            <DataItem title={"Phone"} value={charity.contact.phone} />
            <DataItem title={"Income"} value={charity.finances.income} />
            <DataItem title={"Spending"} value={charity.finances.spending} />
            <GrantsList data={charity.funding.grants} />
          </div>
        );
      })}
      ;
    </div>
  );
};
