import { getCurrentUser } from "@/services/clerk/lib/getCurrentUser"
import { redirect } from "next/navigation"
import { OnboardingClient } from "./_client"

export default async function OnboardingPage() {
    //both clerk userId and database user id(user) needs to be set before redirecting
    const {userId, user} = await getCurrentUser({allData: true})

    if (userId == null) return redirect("/")
    if (user != null) return redirect("/app") 

    //otherwise wait till user is created in the database
    return(
      <div className="container flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-4xl">Creating your account...</h1>
        <OnboardingClient userId={userId}/>
      </div>
    )
}