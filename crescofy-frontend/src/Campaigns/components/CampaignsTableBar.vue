<template>
    <div class="row position-set">
        <div class="col-lg-4 col-md-6">
            <div id="datatable_wrapper">
            </div>
        </div>

        <div class="col-lg-4 col-md-6 inc-index">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio0" autocomplete="off" v-on:click="$parent.setStatus('all')" checked>
                <label class="btn btn-outline-primary custom-btn" for="btnradio0">All</label>

                <input type="radio" class="btn-check" name="btnradio" v-on:click="$parent.setStatus('active')" id="btnradio1"
                       autocomplete="off">
                <label class="btn btn-outline-primary custom-btn" for="btnradio1">Active</label>

                <input type="radio" class="btn-check" name="btnradio" v-on:click="$parent.setStatus('pending')" id="btnradio2"
                       autocomplete="off">
                <label class="btn btn-outline-primary custom-btn" for="btnradio2">Pending</label>

                <input type="radio" class="btn-check" name="btnradio" v-on:click="$parent.setStatus('expired')" id="btnradio3"
                       autocomplete="off">
                <label class="btn btn-outline-primary custom-btn" for="btnradio3">Expired</label>
            </div>
        </div>


        <div class="col-lg-4 col-md-6 res-create-btn d-flex justify-content-end inc-index">
            <button type="button" class="btn btn-primary create-btn" data-bs-toggle="button" autocomplete="off"
                    v-on:click="$parent.showCreateDialog()">
                <AddIcon/>
                <span class="ms-2">Create new campaign</span></button>
        </div>

    </div>
</template>

<script>
    import AddIcon from "../../icons/add.vue";

    export default {
        name: "CampaignsTableBar",
        components: {
            AddIcon,
        },
        data: function () {
            return {
                show: false,
                currentUrl: window.location.pathname,
            }
        },
        mounted() {
        }
    }


</script>
