<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import { z } from 'zod'

const typeOptions = ref(['One Way', 'Round Trip'])
const cabinTravelersOptions = ref([
  {
    label: '1 adult, Economy',
    icon: 'carbon:pedestrian-family',
  },
  {
    label: '2 adult, Class',
    icon: 'carbon:pedestrian-family',
  },
  {
    label: '2 adult, Economy',
    icon: 'carbon:pedestrian-family',
  },
])

const schema = z.object({
  type: z.string(),
  from: z.string().trim().min(1),
  to: z.string().trim().min(1),
  departDate: z.string().date(),
  returnDate: z.string().date(),
  classTravelers: z.string().trim(),
})

const state = ref({
  type: typeOptions.value[0],
  from: '',
  to: '',
  departDate: '',
  returnDate: '',
  classTravelers: cabinTravelersOptions.value[0]?.label,
})

const toast = useToast()
function handleSubmit(event: FormSubmitEvent<z.output<typeof schema>>) {
  toast.add({
    title: 'Form has been submitted!',
    description: JSON.stringify(event.data),
    color: 'success',
  })
}
</script>

<template>
  <section class="border border-border bg-white p-6 rounded-tl-2xl rounded-br-2xl ">
    <UForm :schema :state class="flex flex-col gap-6" @submit.prevent="handleSubmit">
      <UFormField name="type" class="mx-auto">
        <URadioGroup v-model="state.type" :items="typeOptions" orientation="horizontal" class="mx-auto font-semibold" />
      </UFormField>

      <hr class="text-secondary opacity-20 md:text-primary">

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <!-- From -->
        <UFormField name="from">
          <div class="flex items-center gap-2">
            <UIcon name="la:plane-departure" class="text-primary text-3xl" />
            <span class="font-bold">From</span>
          </div>
          <UInput v-model="state.from" placeholder="Flight from?" class="w-full mt-2" />
        </UFormField>

        <!-- To -->
        <UFormField name="to">
          <div class="flex items-center gap-2">
            <UIcon name="la:plane-arrival" class="text-primary text-3xl" />
            <span class="font-bold">To</span>
          </div>
          <UInput v-model="state.to" placeholder="Where to?" class="w-full mt-2" />
        </UFormField>

        <!-- Depart -->
        <UFormField name="departDate">
          <div class="flex items-center gap-2">
            <UIcon name="la:calendar-day" class="text-primary text-3xl" />
            <span class="font-bold">Depart</span>
          </div>
          <UInput v-model="state.departDate" type="date" placeholder="Where to?" class="w-full mt-2" />
        </UFormField>

        <!-- Return -->
        <UFormField name="returnDate">
          <div class="flex items-center gap-2">
            <UIcon name="la:calendar-day" class="text-primary text-3xl" />
            <span class="font-bold">Return</span>
          </div>
          <UInput v-model="state.returnDate" type="date" placeholder="Where to?" class="w-full mt-2" />
        </UFormField>

        <!-- Cabin Class & Travelers -->
        <UFormField name="classTravelers">
          <div class="flex items-center gap-2">
            <UIcon name="ic:baseline-airline-seat-recline-extra" class="text-primary text-3xl" />
            <span class="font-bold">Cabin Class & Travelers</span>
          </div>
          <UInputMenu v-model="state.classTravelers" :items="cabinTravelersOptions" value-key="label" class="mt-2 w-full" />
        </UFormField>

        <UButton type="submit" icon="bx:bx-search-alt" class="justify-center bg-secondary md:bg-primary">
          <span class="md:hidden">Search</span>
        </UButton>
      </div>
    </UForm>
  </section>
</template>
