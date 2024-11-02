// "use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/20/solid";

export default function SideFilters({ filter })  {
  const data = filter || [];
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white ">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={() => setMobileFiltersOpen(false)}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-600 bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-montserrat-regular text-yankees-blue">
                  Filters
                </h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {data.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <img src={section.img} alt="" className="w-8" />
                        <span className="text-yankees-blue font-montserrat-light text-sm">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <ChevronDoubleUpIcon
                            className="h-5 w-5 group-data-[open]:hidden"
                            aria-hidden="true"
                          />
                          <ChevronDoubleDownIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {/* Check if subCategories exist */}
                        {section.subCategories ? (
                          <>
                            {/* Render section name if it exists */}
                            {/* <h4 className="text-yankees-blue font-montserrat-light text-sm">{section.category}</h4> */}
                            {section.subCategories.map((subCategory) => (
                              <div key={subCategory.name} className="space-y-2">
                                <span className="text-yankees-blue font-montserrat-light text-sm whitespace-nowrap">
                                  {subCategory.categoryName}
                                </span>
                                <br />
                                <span className="text-yankees-blue font-montserrat-light text-xs whitespace-nowrap">
                                  {subCategory.name}
                                </span>
                                {subCategory.options.map(
                                  (option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        type="checkbox"
                                        className="h-3 w-3 text-yankees-blue border-gray-300 rounded focus:ring-blue-950 "
                                        defaultChecked={option.checked}
                                        value={option.value}
                                      />
                                      <label
                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className="ml-3 text-yankees-blue font-montserrat-light text-xs"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  )
                                )}
                              </div>
                            ))}
                          </>
                        ) : (
                          section.options?.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                className="h-3 w-3 text-yankees-blue border-gray-300 rounded focus:ring-blue-950"
                                defaultChecked={option.checked}
                                value={option.value}
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-xs text-yankees-blue font-montserrat-light"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))
                        )}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Large Screens */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 border-r border-gray-400">
          {/* Sidebar */}
          <form className="hidden lg:block">
            {data.map((section) => (
              <Disclosure
                key={section.id}
                as="div"
                defaultOpen={true}
                className="py-2"
              >
                <h3 className="flow-root">
                  <DisclosureButton className="group flex  w-full justify-between items-center bg-white py-3 text-sm text-yankees-blue hover:text-blue-950">
                    <div className="flex items-center mb-0">
                      <img src={section.img} alt="" className="w-8" />
                      <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm whitespace-nowrap">
                        {section.name}
                      </h3>
                      <ChevronDoubleUpIcon
                        className="ml-1 h-10 w-10 group-data-[open]:hidden"
                        aria-hidden="true"
                      />
                      <ChevronDoubleDownIcon
                        aria-hidden="true"
                        className="ml-1 h-10 w-10 mb-2 [.group:not([data-open])_&]:hidden"
                      />
                    </div>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-0">
                  <div className="space-y-4">
                    {/* Check if subCategories exist */}
                    {section.subCategories ? (
                      <>
                        {/* Render section name if it exists */}
                        {/* <span className="text-yankees-blue font-montserrat-light text-sm">{section.category}</span> */}
                        {section.subCategories.map((subCategory) => (
                          <div key={subCategory.name} className="space-y-2">
                            <span className="text-yankees-blue font-montserrat-light text-sm whitespace-nowrap">
                              {subCategory.categoryName}
                            </span>
                            <br />
                            <span className="text-yankees-blue font-montserrat-light text-xs whitespace-nowrap">
                              {subCategory.name}
                            </span>
                            {subCategory.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="h-3 w-3 text-yankees-blue border-gray-300 rounded focus:ring-blue-950"
                                  defaultChecked={option.checked}
                                  value={option.value}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-yankees-blue font-montserrat-light text-xs whitespace-nowrap"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        ))}
                      </>
                    ) : (
                      section.options?.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            className="h-3 w-3 text-yankees-blue border-gray-300 rounded focus:ring-blue-950"
                            defaultChecked={option.checked}
                            value={option.value}
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 text-xs font-montserrat-light text-yankees-blue whitespace-nowrap"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))
                    )}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

// return (
//   <div className="bg-white">
//     <div>
//       {/* Mobile filter dialog */}
//       <Dialog
//         open={mobileFiltersOpen}
//         onClose={() => setMobileFiltersOpen(false)}
//         className="relative z-40 lg:hidden"
//       >
//         {/* <div className="fixed inset-0 bg-black bg-opacity-25"></div> */}
//         <DialogBackdrop
//           transition
//           className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
//         />
//         <div className="fixed inset-0 z-40 flex">
//           <DialogPanel
//             transition
//             className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
//           >
//             <div className="flex items-center justify-between px-4">
//               <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//               <button
//                 type="button"
//                 onClick={() => setMobileFiltersOpen(false)}
//                 className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2  text-gray-400"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//               </button>
//             </div>

//             {/* Filters */}
//             <form className="mt-4 border-t border-gray-200">
//               {data.map((section) => (
//                 <Disclosure
//                   key={section.id}
//                   as="div"
//                   className="border-t border-gray-200 px-4 py-6"
//                 >
//                   <h3 className="-mx-2 -my-3 flow-root">
//                     <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                       <img src={section.img} alt={""} className="w-8" />
//                       <span className=" text-yankees-blue font-montserrat-light text-sm">
//                         {section.name}
//                       </span>
//                       <span className="ml-6 flex items-center">
//                         <ChevronDoubleDownIcon
//                           className="h-5 w-5 group-data-[open]:hidden"
//                           aria-hidden="true"
//                         />
//                         <ChevronDoubleUpIcon
//                           aria-hidden="true"
//                           className="h-5 w-5 [.group:not([data-open])_&]:hidden"
//                         />
//                       </span>
//                     </DisclosureButton>
//                   </h3>
//                   <DisclosurePanel className="pt-6">
//                     <div className="space-y-4">
//                       {section.subCategories
//                         ? section.subCategories.map((subCategory) => (
//                             <div key={subCategory.name} className="space-y-2">
//                               <h4 className="font-semibold text-gray-700">
//                                 {subCategory.name}
//                               </h4>
//                               {subCategory.options.map(
//                                 (option, optionIdx) => (
//                                   <div
//                                     key={option.value}
//                                     className="flex items-center"
//                                   >
//                                     <input
//                                       id={`filter-${section.id}-${optionIdx}`}
//                                       name={`${section.id}[]`}
//                                       type="checkbox"
//                                       className="h-4 w-4 text-yankees-blue border-gray-300 rounded focus:to-blue-950"
//                                       defaultChecked={option.checked}
//                                       value={option.value}
//                                     />
//                                     <label
//                                       htmlFor={`filter-${section.id}-${optionIdx}`}
//                                       className="ml-3 text-sm text-gray-700"
//                                     >
//                                       {option.label}
//                                     </label>
//                                   </div>
//                                 )
//                               )}
//                             </div>
//                           ))
//                         : section.options?.map((option, optionIdx) => (
//                             <div
//                               key={option.value}
//                               className="flex items-center"
//                             >
//                               <input
//                                 id={`filter-${section.id}-${optionIdx}`}
//                                 name={`${section.id}[]`}
//                                 type="checkbox"
//                                 className="h-4 w-4 text-yankees-blue border-gray-300 rounded focus:to-blue-950"
//                                 defaultChecked={option.checked}
//                                 value={option.value}
//                               />
//                               <label
//                                 htmlFor={`filter-${section.id}-${optionIdx}`}
//                                 className="ml-3 text-sm text-gray-700"
//                               >
//                                 {option.label}
//                               </label>
//                             </div>
//                           ))}
//                     </div>
//                   </DisclosurePanel>
//                 </Disclosure>
//               ))}
//             </form>
//           </DialogPanel>
//         </div>
//       </Dialog>

//       {/* Large Screens */}
//       <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
//         {/* Sidebar */}
//         <form className="hidden lg:block">
//           {data.map((section) => (
//             <Disclosure
//               key={section.id}
//               as="div"
//               defaultOpen={true}
//               className="py-6"
//             >
//               <h3 className="flow-root">
//                 <DisclosureButton className="group flex gap-2 w-full justify-between items-center bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
//                   <div className="flex items-center mb-2">
//                     <img src={section.img} alt={""} className="w-8" />
//                     <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
//                       {section.name}
//                     </h3>
//                     <ChevronDoubleDownIcon
//                       className=" ml-2 h-10 w-10 group-data-[open]:hidden"
//                       aria-hidden="true"
//                     />
//                     <ChevronDoubleUpIcon
//                       aria-hidden="true"
//                       className="ml-2 h-10 w-10 mb-2 [.group:not([data-open])_&]:hidden"
//                     />
//                   </div>
//                 </DisclosureButton>
//               </h3>
//               <DisclosurePanel className="pt-6">
//                 <div className="space-y-4">
//                   {section.subCategories
//                     ? section.subCategories.map((subCategory) => (
//                         <div key={subCategory.name} className="space-y-2">
//                           <h4 className="font-semibold text-gray-700">
//                             {subCategory.name}
//                           </h4>
//                           {subCategory.options.map((option, optionIdx) => (
//                             <div
//                               key={option.value}
//                               className="flex items-center"
//                             >
//                               <input
//                                 id={`filter-${section.id}-${optionIdx}`}
//                                 name={`${section.id}[]`}
//                                 type="checkbox"
//                                 className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//                                 defaultChecked={option.checked}
//                                 value={option.value}
//                               />
//                               <label
//                                 htmlFor={`filter-${section.id}-${optionIdx}`}
//                                 className="ml-3 text-sm text-gray-700"
//                               >
//                                 {option.label}
//                               </label>
//                             </div>
//                           ))}
//                         </div>
//                       ))
//                     : section.options?.map((option, optionIdx) => (
//                         <div key={option.value} className="flex items-center">
//                           <input
//                             id={`filter-${section.id}-${optionIdx}`}
//                             name={`${section.id}[]`}
//                             type="checkbox"
//                             className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//                             defaultChecked={option.checked}
//                             value={option.value}
//                           />
//                           <label
//                             htmlFor={`filter-${section.id}-${optionIdx}`}
//                             className="ml-3 text-sm text-gray-700"
//                           >
//                             {option.label}
//                           </label>
//                         </div>
//                       ))}
//                 </div>
//               </DisclosurePanel>
//             </Disclosure>
//           ))}
//         </form>
//       </div>
//     </div>
//   </div>
// );
// };
