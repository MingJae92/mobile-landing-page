import React from 'react'

export default  function Footer() {
  return (
    <div className="flex gap-4 text-xs text-gray-600 border-t pt-4">
      <a href="#" className="hover:underline">
        Terms & Conditions
      </a>
      <a href="#" className="hover:underline">
        Complaints Procedure
      </a>
      <a href="#" className="hover:underline">
        Privacy Policy
      </a>
    </div>
  )
}

