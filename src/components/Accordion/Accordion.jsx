import { Disclosure, Transition } from '@headlessui/react'


 function Accordion(props) {
  return (
    <div className='flex flex-col justify-start'>
        <Disclosure>
          {({ open }) => (
            <div className='flex flex-col justify-start bg-almost_black  m-4 rounded-xl'>
              <div className={`${open ? "border border-fuchsia rounded-xl  divide-y px-4" : ""}`}>
              <Disclosure.Button className='flex justify-start p-4 w-full font-medium text-base hover:text-fuchsia active:text-fuchsia focus:outline-none'>
               {props.name}
              </Disclosure.Button>
              <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className='p-4 '>
                <span className='font-medium text-fuchsia'> Description:</span> <br/>{props.desc}
                <br/>
                <span className='font-medium text-fuchsia'> Usage:</span> <br/>{props.desc}
              </Disclosure.Panel>
              </Transition>
              </div>
            </div>
          )
          }
        </Disclosure>
    </div>
  )
}

export default Accordion