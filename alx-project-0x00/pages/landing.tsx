import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div className="p-8">
      <h1 className=" text-xl font-extralight mb-8">Landing Page</h1>
      
      {/* Multiple Card instances */}
      <div className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg font-medium mb-4">Property Cards</h2>
        <div className="flex gap-6 flex-wrap">
          <Card />
          <Card />
        </div>
      </div>

      {/* Multiple Button instances with different sizes and shapes */}
      <div className="mb-8 bg-white border p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium mb-4">Button Variations</h2>
        <div className="space-y-4">
          
          {/* Small buttons */}
          <div className="flex gap-4 items-center flex-wrap bg-gray-50 p-4 rounded-lg">
            <span className="font-medium">Small:</span>
            <Button title="Small Rounded SM" size="small" shape="rounded-sm" />
            <Button title="Small Rounded MD" size="small" shape="rounded-md" />
            <Button title="Small Rounded Full" size="small" shape="rounded-full" />
          </div>

          {/* Medium buttons */}
          <div className="flex gap-4 items-center flex-wrap bg-gray-50 p-4 rounded-lg">
            <span className="font-medium">Medium:</span>
            <Button title="Medium Rounded SM" size="medium" shape="rounded-sm" />
            <Button title="Medium Rounded MD" size="medium" shape="rounded-md" />
            <Button title="Medium Rounded Full" size="medium" shape="rounded-full" />
          </div>

          {/* Large buttons */}
          <div className="flex gap-4 items-center flex-wrap bg-gray-50 p-4 rounded-lg">
            <span className="font-medium">Large:</span>
            <Button title="Large Rounded SM" size="large" shape="rounded-sm" />
            <Button title="Large Rounded MD" size="large" shape="rounded-md" />
            <Button title="Large Rounded Full" size="large" shape="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Landing
