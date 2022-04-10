<template>
    <div class="row position-set">
        <div class="col-lg-3 col-md-6">
            <div id="datatable_wrapper">
            </div>
        </div>

        <div class="col-lg-3 col-md-6 inc-index">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio0" autocomplete="off" checked>
                <label class="btn btn-outline-primary custom-btn" for="btnradio0" v-on:click="$parent.setStatus('all')" >All</label>

                <input type="radio" class="btn-check" name="btnradio" v-on:click="$parent.setStatus('is_active')" id="btnradio1"
                       autocomplete="off">
                <label class="btn btn-outline-primary custom-btn" for="btnradio1">Active</label>

                <input type="radio" class="btn-check" name="btnradio" v-on:click="$parent.setStatus('is_pending')" id="btnradio2"
                       autocomplete="off">
                <label class="btn btn-outline-primary custom-btn" for="btnradio2">Pending</label>

                <input type="radio" class="btn-check" name="btnradio" v-on:click="$parent.setStatus('is_archive')" id="btnradio3"
                       autocomplete="off">
                <label class="btn btn-outline-primary custom-btn" for="btnradio3">Expired</label>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 res-date-field dt-col inc-index">
            <!-- <div v-if="currentUrl == '/Offers'"> -->
            <label>Date Range</label>
            <div class="input-group input-daterange">
                <input id="icon-date" type="text" ref="date" class="form-control daterange" readonly name="daterange" :value="$parent.selectedDateRange"/>
            </div>
            <!-- </div> -->
        </div>

        <div class="col-lg-3 col-md-6 res-create-btn d-flex justify-content-end inc-index">
            <button type="button" class="btn btn-primary create-btn" data-bs-toggle="button" autocomplete="off" v-on:click="$parent.showCreateDialog()">
                <AddIcon/>
                <span class="ms-2">Create new offer</span>
            </button>
        </div>

    </div>
</template>

<script>
    import AddIcon from "../../icons/add.vue";
    import {DATE_FORMAT} from "../../Core/helpers/utils";

    export default {
        name: "OffersTableBar",
        components: {
            AddIcon,
        },
        props: ["predefindedDates"],
        data: function () {
            return {
                show: false,
                currentUrl: window.location.pathname,
                startDate: this.predefindedDates['This Year'][0].format(DATE_FORMAT),
                endDate: this.predefindedDates['This Year'][1].format(DATE_FORMAT),
            }
        },
        mounted () {
            this.datepicker = window.$(this.$refs.date);
            let _this = this;
            this.datepicker.daterangepicker({
                autoUpdateInput: false,
                ranges: _this.predefindedDates,
                locale: {
                    format: 'DD/MM/YYYY'
                },
            }, this.$parent.onDateChange);
        }
    }

</script>

<style>
    #icon-date {
        background: url('../../../public/assets/images/calendar.png') no-repeat scroll left center / 15px auto;
        background-position: 95%;
    }

</style>
