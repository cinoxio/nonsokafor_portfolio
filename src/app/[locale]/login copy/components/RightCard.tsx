import { Card } from "@/components/ui/card"

const RightCard = ()=> {
    return(
        <div className="flex-[2.3] rounded-[40px] bg-black flex items-center justify-center m-1">
                <div className="bottom-12 right-12 max-w-md">
                    <Card className="bg-black/80 backdrop-blur-sm p-6 rounded-xl">
                        <p className="text-white/90 text-lg leading-relaxed mb-6">
                            Osmo is full of awesome (and easy to use)
                            interactions that save so much time. They're
                            visually powerful but also robust, and the best
                            thing is, it's only going to get better as more even
                            resources get added! Oh and it doesn't hurt that the
                            dashboard looks sick too.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-600" />
                            <div>
                                <div className="text-white font-medium tracking-wide">
                                    JASON HARVEY
                                </div>
                                <div className="text-white/60 text-sm">
                                    SOMEFOLK
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
        </div>
    )
}

export default RightCard;