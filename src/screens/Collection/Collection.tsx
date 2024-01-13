import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { asset } from "../../api";
import Button from "../../components/global/Button/Button";
import ErrorAnimation from "../../components/global/ErrorAnimation/ErrorAnimation";
import Header from "../../components/global/Header/Header";
import LoadingAnimation from "../../components/global/LoadingAnimation/LoadingAnimation";
import "./Collection.scss";
import CollectionLayout from "../../components/collection/CollectionLayout/CollectionLayout";
import { ImageData } from "../../entities";

export default function Collection() {
  const [data, setData] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = async (id: string) => {
    setError(null);
    setLoading(true);
    const response = await asset(id);
    if (response.error) {
      setError(response.error);
    } else {
      setData(response);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  const renderContent = () => {
    if (loading) {
      return <LoadingAnimation size={200} />;
    } else if (!!error) {
      return <ErrorAnimation size={200} error={error} />;
    }
    return <CollectionLayout data={data} />;
  };

  return (
    <div className={"collection-screen"} data-testid={"collection-layout"}>
      <Header
        iconComponent={<Button text={"<"} action={() => navigate("/")} />}
      />
      {renderContent()}
    </div>
  );
}
