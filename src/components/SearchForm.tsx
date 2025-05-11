import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'


const formSchema = z.object({
  arrivingon: z.date({
    required_error: 'Date is required',
  }),
  arrivingtime: z.string({
    required_error: 'Time is required',
  }),
  leavingtime: z.string({
    required_error: 'Time is required',
  }),
})

const SearchForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      arrivingon: new Date(),
      arrivingtime: '',
      leavingtime: '',
    }
  })
 
  function onSubmit(formData: z.infer<typeof formSchema>) {
    console.log(formData)
  }
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='grid gap-y-1.5 lg:w-1/2'>
        <Label htmlFor='parkingat'>Address</Label>
        <Input id='parkingat' placeholder='Address' />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-y-1.5 grid-cols-1 lg:grid-cols-4 gap-x-32 items-end'>
          {/* Arriving Date */}
          <FormField control={form.control} name='arrivingon' render={({field}) => (
            <FormItem className='lg:w-[250px] grid'>
              <Label htmlFor='arrivingon'>Arriving on</Label>
              <FormControl>
                <Input {...field} value={field.value?.toISOString().split('T')[0] || ''} placeholder='date'/>
              </FormControl>
            </FormItem>
          )}/>

          {/* Arriving Time */}
          <FormField control={form.control} name='arrivingtime' render={({field}) => (
            <FormItem className='lg:w-[250px] grid'>
              <Label htmlFor='arrivingtime'>Arriving Time</Label>
              <FormControl>
                <Input {...field} type="time" placeholder='time to arrive'/>
              </FormControl>
            </FormItem>
          )}/>

          {/* Leaving Time */}
          <FormField control={form.control} name='leavingtime' render={({field}) => (
            <FormItem className='lg:w-[250px] grid'>
              <Label htmlFor='leavingtime'>Leaving Time</Label>
              <FormControl>
                <Input {...field} type="time" placeholder='time to leave '/>
              </FormControl>
            </FormItem>
          )}/>
          
          {/* Submit Button */}
          <Button type='submit'>Send</Button>
        </form>          
      </Form>
    </div>
  )
}

export default SearchForm
