import { useAuth } from "@/hooks/useAuth";

const NylasDemo: React.FC = () => {
  const { user } = useAuth();
  console.log("User in nylas-demo page", user);
  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default NylasDemo;
