import { connectMailbox } from "@/services/nylasConnectServices";

export const handleMailboxConnect = async () => {
  try{
    const response = await connectMailbox()
    return response
  } catch (error) {
    console.error("An error occured while connecting mailbox", error)
  }
}