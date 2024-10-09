import LoginRequired from "@/components/LoginRequired";
import { useAuth } from "@/context/authContext";

const NylasDemo: React.FC = () => {
  const { user } = useAuth();
  if (!user) {
    return <LoginRequired />
  }
  console.log("User in nylas-demo page", user);
  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default NylasDemo;
